<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSessionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sessions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('license_id')->nullable(false);
            $table->unsignedBigInteger('clerk_id')->nullable(false);
            $table->string('contact_id', 200)->nullable(false);
            $table->boolean('finished')->default(false);            
            $table->timestamp('expires_in', 0)->nullable(false);
            $table->timestamp('ended_in')->nullable(true);
            $table->timestamps();
            
            $table->foreign("license_id")->references("id")->on("licenses");
            $table->foreign("clerk_id")->references("id")->on("clerks");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sessions');
    }
}
