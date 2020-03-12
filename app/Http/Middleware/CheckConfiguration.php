<?php

namespace App\Http\Middleware;

use Closure;
use App\Configuration;

use App\Exceptions\ConfigurationException;

class CheckConfiguration
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
        
        $licenseId = $request->headers->get('license_id');

        if ($licenseId != null) {
            $config = Configuration::find($licenseId);

            if ($config != null 
            && $config->endpoint_chatpro != null 
            && $config->token_chatpro != null) {

                $request->merge(['config_chatpro'=>$config]);
                return $next($request);
            }
        }
        
        throw new ConfigurationException('Verify header license_id and value of fields endpoint_chatpro,token_chatpro in configuration');
    }
}
