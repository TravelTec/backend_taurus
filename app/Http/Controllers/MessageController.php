<?php

namespace App\Http\Controllers;

use App\Message;
use Illuminate\Http\Request;

use App\Business\MessageBusiness;
use App\Business\DialogAirfaresBusiness;
use App\Configuration;

class MessageController extends Controller
{
    
    private $business;
    private $dialog;

    public function __construct(MessageBusiness $business, DialogAirfaresBusiness $dialog) {
        $this->business = $business;
        $this->dialog = $dialog;
    }

    public function receive($licenseId, Request $request)
    {
        if ($request->get('Type') == 'receveid_message') {
            
            $contactId = $request->get('Body')['Info']['RemoteJid'];
            $message = $request->get('Body')['Text'];        
            $config = Configuration::find($licenseId);

            $messageCreated = $this->business->receiveMessage($contactId, $message, $config);
            
            $dialogCreated = $this->dialog->verify($message, $messageCreated->session_id, $config);

            return $this->buildResponse($dialogCreated);
        }

        return $this->buildResponse(['not_mapped']);
    }

    public function getMessagesOfSession($sessionId) {    
        return $this->buildResponse(Message::where('session_id', $sessionId)->orderBy('created_at','desc')->get());
    }
    
    
}
