<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['auth:api']], function () {
    Route::resource('licenses', 'LicenseController')->only([
        'index', 'show', 'store', 'destroy'
    ]);
    
    Route::resource('reasons', 'ReasonController')->only([
        'index', 'show', 'store', 'destroy'
    ]);
    
    Route::resource('departments', 'DepartmentController')->only([
        'index', 'show', 'store', 'destroy'
    ]);
    
    Route::resource('departments', 'DepartmentController')->only([
        'index', 'show', 'store', 'destroy'
    ]);
    
    Route::resource('clerks', 'ClerkController')->only([
        'index', 'show', 'store', 'destroy', 'update'
    ]);
    
    Route::resource('configurations', 'ConfigurationController')->only([
        'index', 'show', 'store', 'destroy'
    ]);
    
    Route::group(['prefix' => 'operations',  'middleware' => 'verify.config'], function() {
        Route::get('contacts', 'OperationsController@contacts');
        Route::post('send-message', 'OperationsController@sendMessage');
        Route::get('generate-qrcode', 'OperationsController@generateQrCode');
        Route::post('get-profile', 'OperationsController@getProfile');
        Route::get('reload', 'OperationsController@reload');
        Route::post('send-location', 'OperationsController@sendLocation');
        Route::post('send-file', 'OperationsController@sendFile');
        Route::get('status', 'OperationsController@status');
        Route::post('webhook', 'OperationsController@webhook');
    });
    
    
    Route::group(['prefix' => 'messages'], function () {        
        Route::get('list/{sessionId}', 'MessageController@getMessagesOfSession');    
    });
    
    Route::group(['prefix' => 'sessions'], function () {
        Route::get('active/{clerkId}', 'SessionController@listSessionsActive');    
    });

    Route::group(['prefix' => 'google'], function () {
        Route::get('distance/calcule/{origin}/{destine}', 'GoogleController@calculeDistance');
    });
});


Route::group(['middleware' => ['verify.token']], function () {

    Route::resource('users', 'UserController')->only([
        'index', 'show', 'store', 'destroy', 'update'
    ]); 

    Route::group(['prefix' => 'admin/chatpro'], function() {
        Route::get('balance', 'ChatProAdminController@balance');                
        Route::get('instances', 'ChatProAdminController@instances');      
        Route::post('instances', 'ChatProAdminController@createInstance');
        Route::put('instances/{code}', 'ChatProAdminController@alterNameInstance');
        Route::put('instances/webhook/{code}', 'ChatProAdminController@alterWebhook');
        Route::put('instances/stop/{code}', 'ChatProAdminController@stopInstance');
        Route::delete('instances/{code}', 'ChatProAdminController@deleteInstance');
    });
});

Route::post('receive/{licenseId}', 'MessageController@receive');




