<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ChatProAdminService;

class ChatProAdminController extends Controller
{
    private $service;

    public function __construct(ChatProAdminService $service) {
        $this->service = $service;
    }

    public function balance() {
        return $this->buildResponse($this->service->balance());
    }

    public function instances() {
        return $this->buildResponse($this->service->instances());
    }

    public function alterNameInstance($code, Request $request) {
        return $this->buildResponse($this->service->alterNameInstance($code, $request));
    }

    public function alterWebhook($code, Request $request) {
        return $this->buildResponse($this->service->alterWebhook($code, $request));
    }

    public function stopInstance($code) {
        return $this->buildResponse($this->service->stopInstance($code));
    }

    public function startInstance($code) {
        return $this->buildResponse($this->service->startInstance($code));
    }

    public function deleteInstance($code) {
        return $this->buildResponse($this->service->deleteInstance($code));
    }

    public function createInstance() {
        return $this->buildResponse($this->service->createInstance());
    }

    
}
