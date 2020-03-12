<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\User;

use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
        return $this->buildResponse(User::all());
    }

    public function store(UserRequest $request)
    {
        return User::create([
            'name'=>$request->get('username'),
            'username'=>$request->get('username'),            
            'password'=>Hash::make($request->get('password'))
        ]);
    }

    public function show(User $user)
    {
        return $this->buildResponse($user);
    }

    public function update(UserRequest $request, User $user)
    {
        $user->update([
            'name'=>$request->get('username'),
            'username'=>$request->get('username'),            
            'password'=>Hash::make($request->get('password'))
        ]);
        return $this->buildResponse(User::find($user->id));
    }

    public function destroy(User $user)
    {
        $user->delete();

        return response(null, 204);
    }
}
