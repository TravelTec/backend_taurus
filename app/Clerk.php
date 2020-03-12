<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\User;

class Clerk extends Model
{
    protected $fillable = [
        "license_id",
        "department_id",
        "name",
        "email"
    ];

    protected $with = ['user'];

    public function license()
    {
        return $this->belongsTo('App\License');
    }

    public function user(){
        return $this->hasOne('App\User');
    }

}
