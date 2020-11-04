<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SessionDialogAirfare extends Model
{
    protected $fillable = [        
        "session_id",            
        "type_id",
        "destiny_term",
        "destiny_id",
        "departure_date",
        "boarding_location_term",
        "boarding_location_id",
        "return_date",
        "offer_content"            
    ];

    public function session() {
        return $this->belongsTo('App\Session');
    }
    
}
