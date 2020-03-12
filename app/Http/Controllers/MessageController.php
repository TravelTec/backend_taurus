<?php

namespace App\Http\Controllers;

use App\Message;
use Illuminate\Http\Request;

use App\Business\MessageBusiness;
use App\Configuration;

class MessageController extends Controller
{
    
    private $business;

    public function __construct(MessageBusiness $business) {
        $this->business = $business;
    }

    public function receive($licenseId, Request $request)
    {
        if ($request->get('Type') == 'receveid_message') {
            $contactId = $request->get('Body')['Info']['RemoteJid'];
            $message = $request->get('Body')['Text'];        
            $config = Configuration::find($licenseId);

            return $this->buildResponse($this->business->receiveMessage($contactId, $message, $config));
        }

        return $this->buildResponse(['not_mapped']);
    }

    public function getMessagesOfSession($sessionId) {    
        return $this->buildResponse(Message::where('session_id', $sessionId)->orderBy('created_at','desc')->get());
    }
    
    
}
