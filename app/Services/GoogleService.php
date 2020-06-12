<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class GoogleService {

    private $key;

    public function __construct() {
        $this->key = env('TOKEN_APP_GOOGLE');
    }

    public function calculeDistance($originAddress, $destinationAddress) {
        $response = Http::get($this->makeUrlDistanceMatrix() . "&origins=" . $originAddress . "&destinations=" . $destinationAddress);
        $responseDto = [];
        
        if ($response->ok() && $response['status'] == "OK") {
            $responseDto['destination_address'] = $response['destination_addresses'][0];
            $responseDto['origin_address'] = $response['origin_addresses'][0];

            if ($response["rows"][0]["elements"][0]["status"] == "NOT_FOUND") {
                throw new ServiceException("Address Not Found", 404);                    
            }

            $responseDto['distance'] = [
                'text'=> $response["rows"][0]["elements"][0]["distance"]['text'],
                'value'=> $response["rows"][0]["elements"][0]["distance"]['value']
            ];

            $responseDto['duration'] = [
                'text'=> $response["rows"][0]["elements"][0]["duration"]['text'],
                'value'=> $response["rows"][0]["elements"][0]["duration"]['value']
            ];
        }

        return $responseDto;
    }

    public function makeUrlDistanceMatrix() {
        return "https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&key=" . $this->key;
    }

}