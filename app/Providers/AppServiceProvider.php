<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use App\Services\ChatProService;
use App\Services\ChatProAdminService;
use App\Business\MessageBusiness;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ChatProService::class, function($app){
            return new ChatProService(new MessageBusiness());
        });

        $this->app->bind(ChatProAdminService::class, function($app){
            return new ChatProAdminService();
        });

        $this->app->bind(MessageBusiness::class, function($app){
            return new MessageBusiness();
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
