<?php

namespace App\Http\Middleware;

use Closure;

use Illuminate\Auth\AuthenticationException;

class CheckApiToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $token = $request->headers->get('Authorization');
        $tokenEnv = env('TOKEN_ADMIN');

        if($token === $tokenEnv){
            return $next($request);
        }

        throw new AuthenticationException();
    }
}
