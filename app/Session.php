<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Session extends Model
{
    protected $fillable = [        
        "clerk_id",            
        "license_id",
        "contact_id",
        "finished",
        "expires_in",
        "ended_in"            
    ];

    public function license(){
        return $this->belongsTo('App\License');
    }

    public function clerk() {
        return $this->belongsTo('App\Clerk');
    }
}
