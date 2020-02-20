<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConfigurationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('configurations', function (Blueprint $table) {            
            $table->unsignedBigInteger('license_id')->nullable(false);
            $table->string("name", 150)->nullable(false);
            $table->string("welcome_message", 255)->nullable();
            $table->string("logout_message", 255)->nullable();
            $table->integer("attendance")->nullable(false)->default(0);
            $table->string("absent_message", 255)->nullable();
            $table->string("monday_open", 10)->nullable();
            $table->string("monday_close", 10)->nullable();
            $table->string("tuesday_open", 10)->nullable();
            $table->string("tuesday_close", 10)->nullable();
            $table->string("wednesday_open", 10)->nullable();
            $table->string("wednesday_close", 10)->nullable();
            $table->string("thursday_open", 10)->nullable();
            $table->string("thursday_close", 10)->nullable();    
            $table->string("friday_open", 10)->nullable();
            $table->string("friday_close", 10)->nullable();
            $table->string("saturday_open", 10)->nullable();
            $table->string("saturday_close", 10)->nullable();
            $table->string("sunday_open", 10)->nullable();
            $table->string("sunday_close", 10)->nullable();
            $table->timestamps();

            $table->primary("license_id");
            $table->foreign("license_id")->references("id")->on("licenses");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('configurations');
    }
}
