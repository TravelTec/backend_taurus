<?php

namespace App\Http\Controllers;

use App\License;
use Illuminate\Http\Request;

use App\Http\Requests\LicenseRequest;

class LicenseController extends Controller
{

    public function index()
    {
        return $this->buildResponse(License::all());
    }

    public function store(LicenseRequest $request)
    {
        return $this->buildResponse(License::create($request->all()));
    }

    public function show(License $license)
    {
        return $this->buildResponse($license);
    }

    public function update(Request $request, License $license)
    {
        //
    }

    public function destroy(License $license)
    {
        $license->delete();

        return response(null, 204);
    }
}
