<?php 

namespace App\Business;

use App\Configuration;
use App\Session;
use App\Message;
use App\Clerk;

use Illuminate\Support\Carbon;

class MessageBusiness {

    public function sendMessage(string $contactId, string $message, Configuration $config, $clerkId = null) {
        
        $session = $this->verifySession($contactId, $config, $clerkId);

        $newMessage = [
            'license_id'=>$config->license_id,
            'clerk_id'=>$session->clerk_id,            
            'session_id'=>$session->id,
            'provider_id'=>1,
            'contact_id'=>$contactId,
            'sent_received'=>1,
            'message'=>$message
        ];

        return Message::create($newMessage);

    }

    public function receiveMessage(string $contactId, string $message, Configuration $config) {
        $session = $this->verifySession($contactId, $config);
        
        $newMessage = [
            'license_id'=>$config->license_id,
            'clerk_id'=>$session->clerk_id,            
            'session_id'=>$session->id,
            'provider_id'=>1,
            'contact_id'=>$contactId,
            'sent_received'=>2,
            'message'=>$message
        ];

        return Message::create($newMessage);
        
    }

    public function verifySession(string $contactId, Configuration $config, $clerkId = null) {
        
        $where = [
            ['finished', '=' ,false],
            ['license_id', '=', $config->license_id],
            ['contact_id', '=', $contactId],
            ['expires_in', '>=', Carbon::now()]
        ];

        if ($clerkId != null) {
            array_push($where, ['clerk_id', '=', $clerkId]);
        }

        $session = Session::where($where)->latest()->first();

        if ($session != null) {
            return $session;
        }
        
        
        if ($clerkId == null) {
            $clerkId = $config->clerk_id != null ? $config->clerk_id : Clerk::where('license_id', $config->license_id)->first()->id;
        }

        $newSession = [
            'license_id'=>$config->license_id,
            'clerk_id'=>$clerkId,
            'expires_in'=>Carbon::now()->addHours(12),
            'contact_id'=>$contactId            
        ];

        return Session::create($newSession);

    }

}