<?php

namespace App\Http\Controllers;

use App\Department;
use Illuminate\Http\Request;

use App\Http\Requests\DepartmentRequest;

class DepartmentController extends Controller
{
    public function index()
    {
        return $this->buildResponse(Department::all());
    }

    public function store(DepartmentRequest $request)
    {
        return $this->buildResponse(Department::create($request->all()));
    }

    public function show(Department $department)
    {
        return $this->buildResponse($department);
    }

    public function update(Request $request, Department $department)
    {
        //
    }

    public function destroy(Department $department)
    {
        $department->delete();

        return response(null, 204);
    }
}
