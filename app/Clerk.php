<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Clerk extends Model
{
    protected $fillable = [
        "license_id",
        "department_id",
        "name",
        "email"
    ];

    public function license()
    {
        return $this->hasOne('App\License');
    }
}
