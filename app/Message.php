<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = [
        "license_id",
        "clerk_id",
        "session_id",
        "provider_id",
        "contact_id",
        "message",
        "sent_received"       
    ];

    public function license(){
        return $this->belongsTo('App\License');
    }

    public function clerk() {
        return $this->belongsTo('App\Clerk');
    }

    public function session() {
        return $this->belongsTo('App\Session');
    }
}
