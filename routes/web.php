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



Route::get('/', function () {
	$domain = $_SERVER['HTTP_HOST'];
	if ($domain == 'app.taurusmulticanal.com.br') {
		return view('login');
	}else if ($domain == 'api.taurusmulticanal.com.br') {
		return view('welcome');
	}else{
		return view('login');
	}
    
}); 

Route::get('/user', function () {
	return view('user');
});  

Route::get('/code', function () {
	return view('code');
}); 

Route::get('/list', function () {
	return view('listar');
}); 

Route::get('/qrcode', function () {
	return view('qrcode');
}); 

Route::get('/list-departments', function () {
	return view('departments');
}); 
