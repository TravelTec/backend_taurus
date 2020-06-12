<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Services\GoogleService;

class GoogleController extends Controller
{
    private $service;

    public function __construct(GoogleService $service) {
        $this->service = $service;
    }

    public function calculeDistance($origin, $destine) {
        return $this->buildResponse($this->service->calculeDistance($origin, $destine));
    }
}
