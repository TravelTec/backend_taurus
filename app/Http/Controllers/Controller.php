<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

use App\Http\Dto\ResponseDto;
use App\Http\Resources\ResourceList;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function buildResponse($obj, int $statusCode=200) {
        
        if (is_countable($obj)) {
            return new ResourceList($obj);
        }
        
        return (new ResourceList(collect([$obj])));   
    }

}
