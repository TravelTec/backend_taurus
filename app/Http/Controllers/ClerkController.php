<?php

namespace App\Http\Controllers;

use App\Clerk;
use Illuminate\Http\Request;

use App\Http\Requests\ClerkRequest;

class ClerkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->buildResponse(Clerk::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ClerkRequest $request)
    {       
        return $this->buildResponse(Clerk::create($request->all()));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Clerk  $clerk
     * @return \Illuminate\Http\Response
     */
    public function show(Clerk $clerk)
    {
        return $this->buildResponse($clerk);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Clerk  $clerk
     * @return \Illuminate\Http\Response
     */
    public function update(ClerkRequest $request, Clerk $clerk)
    {
        $clerk->update($request->all());

        return $this->buildResponse(Clerk::find($clerk->id));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Clerk  $clerk
     * @return \Illuminate\Http\Response
     */
    public function destroy(Clerk $clerk)
    {
        $clerk->delete();

        return response(null, 204);
    }
}
