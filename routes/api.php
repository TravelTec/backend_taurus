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
