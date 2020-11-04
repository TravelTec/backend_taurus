<?php 

namespace App\Services;

use Illuminate\Support\Facades\Http;

use App\Exceptions\ServiceException;

class TravelTecService {

    private $token;
    private $endpoint;

    public function __construct() {
        $this->token = env("TRAVELTEC_TOKEN");
        $this->endpoint = env("TRAVELTEC_ENDPOINT");
    }
    
    public function listAirports($term = "") {
        $response = $this->prepareRequest()->get($this->makeUrl("aeroportos?aero=" . $term));
        
        if ($response->ok() && $response['errors'] == false) {            
            return $this->formatAirportsForBot($response['message']);
        }

        throw new ServiceException($response['message'], $response->status());
    }

    public function search($data) {

        $requestPayload = $data;
        $response = $this->prepareRequest()->post($this->makeUrl("search"), $requestPayload);
        
        if ($response->ok() && $response['errors'] == false) {            
            return $response;
        }

        throw new ServiceException($response['message'], $response->status());
    }

    private function formatAirportsForBot($data) {
        $result = [];
        $i = 1;
        
        foreach($data as $airport) {
            $result[] = [
                'id'=>$i,
                'description'=>$airport['cidade'],
                'code'=>$airport['codigo']
            ];
            $i++;
        }

        return $result;
    }

    private function prepareRequest() {
        return Http::withHeaders($this->makeHeaders());
    }

    private function makeHeaders() {
        return [
            'Authorization'=>$this->token
        ];
    }

    private function makeUrl($path) {
        return $this->endpoint . '/serv/aereo/' . $path;
    }

}