<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ChatProService;

class OperationsController extends Controller
{
    
    private $chatProService;

    public function __construct(ChatProService $chatProService) {
        $this->chatProService = $chatProService;
    }
    
    public function contacts(Request $request)
    {                
        return $this->buildResponse($this->chatProService->contacts($request->get('config_chatpro')));
    }

    public function generateQrCode(Request $request)
    {                
        return $this->buildResponse($this->chatProService->generateQrCode($request->get('config_chatpro')));
    }

    public function sendMessage(Request $request)
    {                
        return $this->buildResponse($this->chatProService->sendMessage($request ,$request->get('config_chatpro')));
    }

    public function getProfile(Request $request) 
    {
        return $this->buildResponse($this->chatProService->getProfile($request, $request->get('config_chatpro')));
    }

    public function reload(Request $request)
    {                
        return $this->buildResponse($this->chatProService->reload($request->get('config_chatpro')));
    }

    public function sendLocation(Request $request) 
    {        
        return $this->buildResponse($this->chatProService->sendLocation($request, $request->get('config_chatpro')));
    }

    public function sendFile(Request $request) 
    {        
        return $this->buildResponse($this->chatProService->sendFile($request, $request->get('config_chatpro')));
    }

    public function status(Request $request)
    {                
        return $this->buildResponse($this->chatProService->status($request->get('config_chatpro')));
    }
    
    public function webhook(Request $request) 
    {        
        return $this->buildResponse($this->chatProService->webhook($request, $request->get('config_chatpro')));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
