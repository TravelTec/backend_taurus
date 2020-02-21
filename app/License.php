<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class License extends Model
{
    protected $fillable = [
        'status', 
        'signature', 
        'contact', 
        'email', 
        'cellphone', 
        'cellphone_app', 
        'credits'
    ];
}
