<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use App\Services\ChatProService;
use App\Services\ChatProAdminService;
use App\Services\GoogleService;
use App\Business\MessageBusiness;
use App\Services\FacebookService;
use App\Services\ProductService;

class AppServiceProvider extends ServiceProvider
{

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        
        $this->app->singleton(ChatProService::class, function($app){
            return new ChatProService($app->make(MessageBusiness::class));
        });

        $this->app->singleton(ChatProAdminService::class, function($app){
            return new ChatProAdminService();
        });

        $this->app->singleton(GoogleService::class, function($app){
            return new GoogleService();
        });

        $this->app->singleton(MessageBusiness::class, function($app){
            return new MessageBusiness();
        });

        $this->app->singleton(ProductService::class, function($app){
            return new ProductService($app->make(FacebookService::class), $app->make(ChatProService::class));
        });

        $this->app->singleton(FacebookService::class, function($app){
            return new FacebookService();
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
