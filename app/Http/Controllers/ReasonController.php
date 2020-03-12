<?php

namespace App\Http\Controllers;

use App\Reason;
use Illuminate\Http\Request;

use App\Http\Requests\ReasonRequest;

class ReasonController extends Controller
{
 
    public function index()
    {
        return $this->buildResponse(Reason::all());
    }

    public function store(ReasonRequest $request)
    {
        return $this->buildResponse(Reason::create($request->all()));
    }

    public function show(Reason $reason)
    {
        return $this->buildResponse($reason);
    }

    public function update(Request $request, Reason $reason)
    {
        //
    }

    public function destroy(Reason $reason)
    {
        $reason->delete();
        
        return response(null, 204);
    }
}
