<?php

namespace App\Services;

use App\Configuration;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;

use App\Exceptions\ServiceException;

class ChatProAdminService {

    private $host;
    private $user;
    private $password;    

    public function __construct() {
        $this->host = env("CHATPRO_ADMIN_HOST");
        $this->user = env("CHATPRO_ADMIN_USER");
        $this->password = env("CHATPRO_ADMIN_PASSWORD");
    }

    public function loginAsJson() {
        return $this->login()->json();
    }

    public function login() {

        $requestPayload = [
            'email'=>$this->user,
            'senha'=>$this->password
        ];

        $response = Http::withHeaders(['Content-Type'=> 'application/json'])
        ->post($this->makeUrl("token"), $requestPayload);
        
        if ($response->ok() && $response['success'] == true) {
            return $response;
        }

        throw new ServiceException($response['message'], 400);
    }

    public function balance() {        
        $response = $this->prepareRequest()->get($this->makeUrl("saldo"));
        
        if ($response->ok() && $response['success'] == true) {            
            return $response['user'];
        }

        throw new ServiceException($response['message'], $response->status());
    }

    public function instances() {
        $response = $this->prepareRequest()->get($this->makeUrl("instancias"));

        if ($response->ok() && $response['success'] == true) {
            return $response['instances'];
        }

        throw new ServiceException($response['message'], $response->status());
    }

    public function alterNameInstance($code, $request) {
        $requestPayload = [
            'code'=> $code,
            'new_name'=>$request->get('name')
        ];

        $response = $this->prepareRequest()->post($this->makeUrl("alterar_nome"), $requestPayload);

        if ($response->ok() && $response['success'] == true) {
            return $response['message'];
        }

        throw new ServiceException($response['message'], $response->status());
    }

    public function alterWebhook($code, $request) {
        $requestPayload = [
            'code'=> $code,
            'new_webhook'=>$request->get('webhook')
        ];

        $response = $this->prepareRequest()->post($this->makeUrl("alterar_webhook"), $requestPayload);

        if ($response->ok() && $response['success'] == true) {
            return $response['message'];
        }

        throw new ServiceException($response['message'], $response->status());
    }

    private function alterStatus($code, $status) {
        $requestPayload = [
            'code'=> $code,
            'value'=>$status
        ];

        $response = $this->prepareRequest()->post($this->makeUrl("status_instancia"), $requestPayload);

        if ($response->ok() && $response['success'] == true) {
            return $response['message'];
        }

        throw new ServiceException($response['message'], $response->status());
    }

    public function deleteInstance($code) {
        $requestPayload = [
            'code'=> $code            
        ];

        $response = $this->prepareRequest()->post($this->makeUrl("deletar_instancia"), $requestPayload);

        if ($response->ok() && $response['success'] == true) {
            return $response['message'];
        }

        throw new ServiceException($response['message'], $response->status());
    }

    public function createInstance() {
        $requestPayload = [];

        $response = $this->prepareRequest()->post($this->makeUrl("criar_instancia"), $requestPayload);

        if ($response->ok() && $response['success'] == true) {
            return $response['instance'];
        }

        throw new ServiceException($response['message'], $response->status());
    }

    public function stopInstance($code) {
        return $this->alterStatus($code, 0);
    }

    public function startInstance($code) {
        return $this->alterStatus($code, 1);
    }

    private function prepareRequest() {
        $this->loginWhenNecessary();
        return Http::withHeaders($this->makeHeaders());
    }

    private function makeUrl($action) {
        return $this->host . "?action=" . $action;
    }

    private function makeHeaders() {
        return [
            'Authorization'=> 'Bearer ' . Cache::get('chatpro_admin_token'),
            'Content-Type'=> 'application/json'
        ];
    }

    private function loginWhenNecessary() {
        $verifyToken = Cache::get('chatpro_admin_token', 'undefined');

        if ($verifyToken == "undefined") {
            $token = $this->login()['token'];
            Cache::put('chatpro_admin_token', $token);
        }
    }

}