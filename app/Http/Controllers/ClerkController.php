<?php

namespace App\Http\Controllers;

use App\Clerk;
use Illuminate\Http\Request;

use App\Http\Requests\ClerkRequest;

use App\User;
use Illuminate\Support\Facades\Hash;

class ClerkController extends Controller
{
    
    public function index()
    {
        return $this->buildResponse(Clerk::all());
    }

    public function store(ClerkRequest $request)
    {       
        $created = Clerk::create($request->all());
        
        $this->saveUser($request, $created);

        return $this->buildResponse(Clerk::create($request->all()));
    }

    public function show(Clerk $clerk)
    {
        return $this->buildResponse($clerk);
    }

    public function update(ClerkRequest $request, Clerk $clerk)
    {
        $clerk->update($request->all());
        $user = User::where('clerk_id',$clerk->id)->first();

        $this->saveUser($request, $clerk, $user);
        
        return $this->buildResponse(Clerk::find($clerk->id));
    }

    public function destroy(Clerk $clerk)
    {
        $clerk->delete();

        return response(null, 204);
    }

    private function saveUser($request, $clerk , $user=null) {
        if ($user == null) {
            User::create([
                'name'=>$request->get('username'),
                'username'=>$request->get('username'),
                'clerk_id'=>$clerk->id,
                'password'=>Hash::make($request->get('password'))
            ]);
        }
        else {
          $user->update([
            'name'=>$request->get('username'),
            'username'=>$request->get('username'),
            'clerk_id'=>$clerk->id,
            'password'=>Hash::make($request->get('password'))
            ]);  
        }
    }
}
