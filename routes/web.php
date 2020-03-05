<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

$currentDomain = Request::server('HTTP_HOST');
if ($currentDomain == 'https://api.taurusmulticanal.com.br') {
	Route::get('/', function () {
	    return view('welcome');
	});
}else if ($currentDomain == 'https://app.taurusmulticanal.com.br') {
	Route::get('/', function () {
	    return view('login');
	});
}else{
	Route::get('/documentacao', function () {
	    return view('welcome');
	});

	Route::get('/', function () {
	    return view('login');
	}); 
} 


