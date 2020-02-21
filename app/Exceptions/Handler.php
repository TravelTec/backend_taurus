<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use \Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Validation\ValidationException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Exception  $exception
     * @return void
     *
     * @throws \Exception
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Exception
     */
    public function render($request, Exception $e)
    {

        $response = [
            'errors' => 'Sorry, something went wrong.'
        ];

        if (config('app.debug')) {
            $response['exception'] = get_class($e); 
            $response['message'] = $e->getMessage();
            $response['trace'] = $e->getTrace();
        }
        
        $status = 400;
        
        if ($this->isHttpException($e)) {
            $status = $e->getStatusCode();
        }

        if ($e instanceof ModelNotFoundException) {
            $status = 404;
        }

        if($e instanceof ValidationException) {
            $response['errors'] = $e->errors();        
        }
        
        return response()->json($response, $status);

    }
}
