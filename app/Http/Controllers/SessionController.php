<?php

namespace App\Http\Controllers;

use App\Session;
use Illuminate\Http\Request;

use Illuminate\Support\Carbon;

class SessionController extends Controller
{
    
    public function listSessionsActive($clerkId)
    {
        $where = [
            ['finished', '=', false],
            ['expires_in', '>=', Carbon::now()],
            ['clerk_id', '=', $clerkId]
        ];

        return $this->buildResponse(
            Session::select('id','contact_id', 'expires_in')
                        ->where($where)                        
                        ->get()
        );
    }

    
}
