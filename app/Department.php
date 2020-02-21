<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    protected $fillable = [
        "license_id",
        "name"        
    ];

    public function license()
    {
        return $this->hasOne('App\License');
    }
}
