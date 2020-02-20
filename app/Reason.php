<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reason extends Model
{
    protected $fillable = [
        "license_id",
        "name",
        "bond"        
    ];

    public function license()
    {
        return $this->hasOne('App\License');
    }
}
