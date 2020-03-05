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

Route::get('/documentacao', function () {
    return view('welcome');
});

Route::get('/admin', function () {
    return view('login');
});

Route::get('https://api.taurusmulticanal.com.br', function () {
    return view('welcome');
});

Route::get('https://app.taurusmulticanal.com.br', function () {
    return view('login');
});
