<?php

namespace App\Business;

use App\Services\ChatProService;
use App\Services\TravelTecService;
use App\SessionDialogAirfare;
use App\Session;
use App\Configuration;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Carbon;

use App\Exceptions\ServiceException;

class DialogAirfaresBusiness {

    private $service;
    private $traveltec;

    public function __construct(ChatProService $service, TravelTecService $traveltec) {
        $this->service = $service;
        $this->traveltec = $traveltec;
    }

    private function startDialog($sessionId) {

        $dialog = [
            'session_id'=>$sessionId,            
        ];

        return SessionDialogAirfare::create($dialog);
    }

    public function showMenu($sessionId, Configuration $config) {

        $text = "Deseja passagem só de ida ou ida e volta ?" . chr(10) .
                " 1. Ida" . chr(10) .
                " 2. Ida e volta"; 

        $this->sendMessage($sessionId, $text, $config);

    }

    public function verify($message, $sessionId, Configuration $config) {
        
        if ($message === "#buscar") {            
            $this->showMenu($sessionId, $config);
            return $this->startDialog($sessionId);
        } else {
            $where = [
                'session_id'=>$sessionId,
                'finished'=>null
            ];

            $dialog = SessionDialogAirfare::where($where)->latest()->first();
            
            if ($dialog != null) {
                $this->identifyStepDialog($dialog, $message, $sessionId, $config);                
                return $dialog;
            }
        }

        return null;
    }

    private function identifyStepDialog($dialog, $message, $sessionId, Configuration $config) {
        if ($dialog->type_id == 0) {
            $this->stepType($dialog, $message, $sessionId, $config);
        } else if ($dialog->destiny_term == null && $dialog->destiny_id == null) {
            $this->stepDestiny($dialog, $message, $sessionId, $config);
        } else if ($dialog->destiny_term != null && $dialog->destiny_id == null) {
            $this->stepDestinyId($dialog, $message, $sessionId, $config);
        } else if ($dialog->destiny_term != null && $dialog->destiny_id != null 
                && $dialog->departure_date == null) {
            $this->stepDepartureDate($dialog, $message, $sessionId, $config);
        } else if ($dialog->destiny_term != null && $dialog->destiny_id != null 
                && $dialog->departure_date != null 
                && $dialog->boarding_location_term == null && $dialog->boarding_location_id == null) {
            $this->stepBoardingLocation($dialog, $message, $sessionId, $config);
        } else if ($dialog->destiny_term != null && $dialog->destiny_id != null 
                && $dialog->departure_date != null 
                && $dialog->boarding_location_term != null && $dialog->boarding_location_id == null) {
            $this->stepBoardingLocationId($dialog, $message, $sessionId, $config);
        } else if ($dialog->destiny_term != null && $dialog->destiny_id != null 
            && $dialog->departure_date != null 
            && $dialog->boarding_location_term != null && $dialog->boarding_location_id != null 
            && $dialog->type_id = 2 && $dialog->finished != true) {
            $this->stepReturnDate($dialog, $message, $sessionId, $config);
        }

    }

    private function stepType($dialog, $message, $sessionId, Configuration $config) {        
        $text = "Você selecionou uma opção incorreta.";

        if ($message == "1" || $message == "2") {        
            $dialog->update([
                'type_id'=>$message
            ]);

            $text = "Qual será o destino? ";
            $this->sendMessage($sessionId, $text, $config);

        } else {
            $this->sendMessage($sessionId, $text, $config);
            $this->showMenu($sessionId, $config);
        }
        
    }

    private function stepDestiny($dialog, $message, $sessionId, Configuration $config) {

        $text = "Nenhuma opção foi encontrada com o termo digitado, digite novamente o destino desejado.";

        $data = [
            [
                'id'=>'1',
                'description'=>'Miami, Estados Unidos da América, Miami(MIA)'
            ],
            [
                'id'=>'2',
                'description'=>'Miami 2, Estados Unidos da América, Miami(MIA2)'
            ]
        ];

        if ($message == "Grecia") {
            $data = [];
        }

        // realizar consuta na API para destinos
        $data = $this->traveltec->listAirports($message);

        Cache::put($sessionId . "__destiny", json_encode($data));

        if (count($data) > 0) {
            $text = "Foram encontradas as seguintes opções, selecione a desejada. " . chr(10);
            $i = 0;
            while($i < count($data)) {
                $text .= ($i+1)  . ". " .  $data[$i]['description'] . chr(10);
                $i++;
            }     
            
            $text .=  "0. Caso não tenha encontrado, e deseje tentar com outro termo";

            $dialog->destiny_term = $message;
            $dialog->update();
        }

        $this->sendMessage($sessionId, $text, $config);
    }

    private function stepDestinyId($dialog, $message, $sessionId, Configuration $config) {

        $text = "Você selecionou uma opção incorreta, a mesma deve estar na lista de consulta";

        if ($message == "0") {
            $dialog->destiny_term = null;
            $dialog->update();

            $text = "Qual será o destino? ";
        } else {
            $data = json_decode(Cache::get($sessionId . "__destiny", '[]'));

            if (\is_numeric($message)) {
                $idx = ((int)$message) - 1;

                if (isset($data[$idx])) {
                    $obj = $data[$idx];
                    Cache::put($sessionId . "__destiny_selected", json_encode($obj));
                    
                    $dialog->destiny_id = $obj->id;
                    $dialog->save();

                    $text = "Você selecionou: " . $obj->description;
                    $this->sendMessage($sessionId, $text, $config);

                    $text = "Qual é a data que deseja embarcar (dd/mm/yyyy)?";
                } else {
                    $text = "O item digitado precisa ser um numero entre 1 e " . count($data);    
                }
            } else {
                $text = "O item digitado precisa ser um numero inteiro válido, não pode conter letras";
            }
        }

        $this->sendMessage($sessionId, $text, $config);
    }

    private function stepDepartureDate($dialog, $message, $sessionId, Configuration $config) {
        $text = "Digite uma data de embarque válida no formato (dd/mm/yyyy) por favor.";

        if ($this->isValidDate($message)) {

            $date = Carbon::createFromFormat('d/m/Y', $message);
            $now = Carbon::now();

            if ($date > $now) {
                $dialog->departure_date = $message;
                $dialog->save();

                $text = "Onde será o embarque ?";
            } else {
                $text = "A data digitada precisa ser posterior a data atual";
            }          
        }

        $this->sendMessage($sessionId, $text, $config);
    }

    public function stepBoardingLocation($dialog, $message, $sessionId, Configuration $config) {
        $text = "Nenhuma opção foi encontrada com o termo digitado, digite novamente o local de embarque desejado.";  
        
        // realizar consuta na API para locais de embarque
        $data = [
            [
                'id'=>'1',
                'description'=>'GRU - Aeroporto Guarulhos'
            ],
            [
                'id'=>'2',
                'description'=>'CGU - Aeroporto Cumbica'
            ]
        ];

        if ($message == "Sampa") {
            $data = [];
        }

        // realizar consuta na API para destinos
        $data = $this->traveltec->listAirports($message);

        Cache::put($sessionId . "__boardingLocation", json_encode($data));

        if (count($data) > 0) {
            $text = "Foram encontradas as seguintes opções, selecione a desejada. " . chr(10);
            $i = 0;
            while($i < count($data)) {
                $text .= ($i+1)  . ". " .  $data[$i]['description'] . chr(10);
                $i++;
            }     
            
            $text .=  "0. Caso não tenha encontrado, e deseje tentar com outro local de embarque";

            $dialog->boarding_location_term = $message;
            $dialog->update();
        }

        $this->sendMessage($sessionId, $text, $config);
    }

    public function stepBoardingLocationId($dialog, $message, $sessionId, Configuration $config) {
        $text = "Você selecionou uma opção incorreta, a mesma deve estar na lista de consulta";

        if ($message == "0") {
            $dialog->boarding_location_term = null;
            $dialog->update();

            $text = "Qual será o local de embarque? ";
        } else {
            $data = json_decode(Cache::get($sessionId . "__boardingLocation", '[]'));

            if (\is_numeric($message)) {
                $idx = ((int)$message) - 1;

                if (isset($data[$idx])) {
                    $obj = $data[$idx];
                    Cache::put($sessionId . "__boardingLocation_selected", json_encode($obj));
                    
                    $dialog->boarding_location_id = $obj->id;
                    $dialog->save();

                    $text = "Você selecionou: " . $obj->description;
                    $this->sendMessage($sessionId, $text, $config);

                    if ($dialog->type_id == 2) {
                        $text = "Qual é a data que deseja retornar (dd/mm/yyyy)?";
                        $this->sendMessage($sessionId, $text, $config);
                    } else {
                        $this->searchOffer($dialog, $message, $sessionId, $config);
                    }

                    
                } else {
                    $text = "O item digitado precisa ser um numero entre 1 e " . count($data);    
                }
            } else {
                $text = "O item digitado precisa ser um numero inteiro válido, não pode conter letras";
            }
        }            
    }

    private function stepReturnDate($dialog, $message, $sessionId, Configuration $config) {
        $text = "Digite uma data de retorno válida no formato (dd/mm/yyyy) por favor.";

        if ($this->isValidDate($message)) {

            $date = Carbon::createFromFormat('d/m/Y', $message);            
            $departure_date = Carbon::createFromFormat('d/m/Y', $dialog->departure_date);

            if ($date > $departure_date) {
                $dialog->return_date = $message;
                $dialog->save();

                $this->searchOffer($dialog, $message, $sessionId, $config);
            } else {
                $text = "A data de retorno precisa ser posterior a data de embarque";
            }          
        }        
    }

    private function searchOffer($dialog, $message, $sessionId, Configuration $config) {        
        $text = "Aguarde enquanto consultamos a melhor oferta para você";

        $dialog->finished = true;
        $dialog->save();

        $this->sendMessage($sessionId, $text, $config);

        $destiny = json_decode(Cache::get($sessionId . "__destiny_selected"));
        $boardingLocation = json_decode(Cache::get($sessionId . "__boardingLocation_selected"));

        $parts = [];

        $parts[] = [
            'aero_embarque'=>$boardingLocation->code,
            'aero_desembarque'=>$destiny->code,
            'data_embarque'=>\str_replace('/', '-', $dialog->departure_date),
            'hora_embarque'=>'00:00',
            'hora_desembarque'=>'23:59' 
        ];

        $url = "https://dev.traveltec.com.br/buscar.php?origem=". $boardingLocation->code .
                    "&destino=". $destiny->code .
                    "&cidade_origem=". \urlencode($destiny->description) .
                    "&cidade_destino=" . \urlencode($boardingLocation->description) . 
                    "&data_partida=". \str_replace('/', '-', $dialog->departure_date) .
                    "&adt=1&inf=0&bb=0&classe=0&bagagem=0";

        if ($dialog->type_id == 2) {            
            $parts[] = [
                'aero_embarque'=>$destiny->code,
                'aero_desembarque'=>$boardingLocation->code,
                'data_embarque'=>\str_replace('/', '-', $dialog->return_date),
                'hora_embarque'=>'00:00',
                'hora_desembarque'=>'23:59' 
            ];

            $url .= "&tipo_voo=1&data_retorno=" . \str_replace('/', '-', $dialog->return_date);
        } else {
            $url .= "&tipo_voo=2";
        }

        $dataSearch = [
            'adt'=>1,
            'chd'=>0,
            'inf'=>0,
            'classe'=>0,
            'bagagem'=>0,
            'companhia'=>'ALL',            
            'conexoes'=>2,
            'trechos'=>$parts
        ];

        try {
            $responseApi = $this->traveltec->search($dataSearch);

            $dialog->offer_content = $responseApi->json(); // retorno da API
            $dialog->save();

            $text = $responseApi['message'] . chr(10);
            $text .= $url;

            $this->sendMessage($sessionId, $text, $config);

        } catch (ServiceException $ex) {
            $this->sendMessage($sessionId, "Não foram encontrados voos disponiveis", $config);
        }

    }

    private function getSession($sessionId) {
        return Session::find($sessionId);
    }

    private function sendMessage($sessionId, $message, Configuration $config) {
        $session = $this->getSession($sessionId);
        $contact = explode('@', $session->contact_id)[0];

        $this->service->sendMessageWithParams($contact, $message, $session->clerk_id, $config);
    }

    private function isValidDate($date) {

        try {
            $arr = explode('/', $date);
            
            if (strlen($date) === 10 && count($arr) == 3) {
                if (is_numeric($arr[0]) && is_numeric($arr[1]) && is_numeric($arr[2])) {
                    $day = (int)$arr[0];
                    $month = (int)$arr[1];
                    $year = (int)$arr[2];

                    return \checkdate($month, $day, $year);
                }
            }

            return false;

        } catch (\Exception $e) {
            return false;
        }
    }
}