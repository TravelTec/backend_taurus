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
        "sunday_close" ,
        "endpoint_chatpro",
        "token_chatpro",
        "id_chatpro",
        "clerk_id",
        "page_id",
        "catalog_id"
    ];

    
    public function license()
    {
        return $this->belongsTo('App\License');
    }

    public function clerk() {
        return $this->belongsTo('App\Clerk');
    }
}
