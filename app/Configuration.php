<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Configuration extends Model
{
    protected $primaryKey = 'license_id';

    protected $fillable = [
        "license_id",
        "name",
        "welcome_message",
        "logout_message",
        "attendance",
        "absent_message",
        "monday_open",
        "monday_close",
        "tuesday_open",
        "tuesday_close",
        "wednesday_open",
        "wednesday_close",
        "thursday_open",
        "thursday_close",
        "friday_open",
        "friday_close",
        "saturday_open",
        "saturday_close",
        "sunday_open",
        "sunday_close"        
    ];

    
    public function license()
    {
        return $this->hasOne('App\License');
    }
}
