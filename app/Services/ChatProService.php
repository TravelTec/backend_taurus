<?php

namespace App\Services;

use App\Configuration;
use Illuminate\Support\Facades\Http;

use App\Exceptions\ServiceException;
use App\Business\MessageBusiness;

class ChatProService {
    
    private $messageBusiness;

    public function __construct(MessageBusiness $messageBusiness) {
        $this->messageBusiness = $messageBusiness;
    }

    public function contacts(Configuration $config) {
       $response = $this->prepareRequest($config)->get($this->makeUrl($config, "contacts"));    

        if ($response->ok()) {
            return $this->flattenArrayContacts($response->json()['Contacts']);
        }

        throw new ServiceException($response['message'], $response->status());

    }

    public function reload(Configuration $config) {
        $response = $this->prepareRequest($config)->get($this->makeUrl($config, "reload"));    
 
         if ($response->ok()) {
             return $response->json();
         }
 
         throw new ServiceException($response['message'], $response->status());
 
     }

     public function status(Configuration $config) {
        $response = $this->prepareRequest($config)->get($this->makeUrl($config, "status"));    
 
         if ($response->ok()) {
             return $response->json();
         }
 
         throw new ServiceException($response['message'], $response->status());
 
     }

     public function generateQrCode(Configuration $config) {
        $response = $this->prepareRequest($config)->get($this->makeUrl($config, "generate_qrcode"));    
 
         if ($response->ok()) {
             return $response->json();
         }
 
         throw new ServiceException($response['message'], $response->status());
 
     }

    public function sendMessage($request, Configuration $config) {
        $requestPayload = [            
            'menssage'=>$request->get('message'),
            'number'=>$request->get('number')
        ];
        
        $response = $this->prepareRequest($config)->post($this->makeUrl($config, "send_message"), $requestPayload);

        if ($response->ok()) {
            $this->messageBusiness->sendMessage($request->get('number') . '@s.whatsapp.net', 
                                                $request->get('message'), 
                                                $config,
                                                $request->get('clerk_id'));
            return $response->json();
        }

        throw new ServiceException($response['message'], $response->status());
    }

    public function sendLocation($request, Configuration $config) {
        $requestPayload = [
            'address'=>$request->get('address'),
            'lat'=>$request->get('lat'),        
            'lng'=>$request->get('lng'),        
            'name'=>$request->get('name'),
            'number'=>$request->get('number')
        ];
        
        $response = $this->prepareRequest($config)->post($this->makeUrl($config, "send_location"), $requestPayload);

        if ($response->ok()) {
            return $response->json();
        }

        throw new ServiceException($response['message'], $response->status());
    }

    public function sendFile($request, Configuration $config) {
        $requestPayload = [
            'caption'=>$request->get('caption'),
            'url'=>$request->get('url'),                    
            'number'=>$request->get('number')
        ];
        
        $response = $this->prepareRequest($config)->post($this->makeUrl($config, "send_message_file_from_url"), $requestPayload);

        if ($response->ok()) {
            return $response->json();
        }

        throw new ServiceException($response['message'], $response->status());
    }

    public function webhook($request, Configuration $config) {
        $requestPayload = [
            'webhook'=> $request->get('webhook')
        ];

        $response = $this->prepareRequest($config)->post($this->makeUrl($config, "webhook"), $requestPayload);

        if ($response->ok()) {
            return $response->json();
        }

        throw new ServiceException($response['message'], $response->status());
    }

    public function getProfile($request, Configuration $config) {
        $requestPayload = [
            'number'=> $request->get('number') . '@s.whatsapp.net'
        ];

        $response = $this->prepareRequest($config)->post($this->makeUrl($config, "get_profile"), $requestPayload);

        if ($response->ok()) {
            return $response->json();
        }

        throw new ServiceException($response['message'], $response->status());
    }
    
    private function prepareRequest(Configuration $config) {
        return Http::withHeaders($this->makeHeaders($config));
    }

    private function makeHeaders(Configuration $config) {
        return [
            'Authorization'=> $config->token_chatpro
        ];
    }

    private function makeUrl(Configuration $config, $path) {
        return 'https://' . $config->endpoint_chatpro . '/api/v1/' . $path;
    }

    private function flattenArrayContacts(array $array) {
        $flattern = array();
        foreach ($array as $key => $value){
            $flattern[] = $value;
        }
        return $flattern;
    }
    

}