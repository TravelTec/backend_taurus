<?php

namespace App\Http\Controllers;

use App\Configuration;
use Illuminate\Http\Request;

use App\Http\Requests\ConfigurationRequest;

class ConfigurationController extends Controller
{
    public function index()
    {
        return $this->buildResponse(Configuration::all());
    }

    public function store(ConfigurationRequest $request)
    {
        return $this->buildResponse(Configuration::create($request->all()));
    }

    public function show(Configuration $configuration)
    {
        return $this->buildResponse($configuration);
    }

    public function update(Request $request, Configuration $configuration)
    {
        //
    }

    public function destroy(Configuration $configuration)
    {
        $configuration->delete();

        return response(null, 204);
    }
}
