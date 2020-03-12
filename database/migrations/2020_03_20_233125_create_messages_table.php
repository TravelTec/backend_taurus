<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('license_id')->nullable(false);
            $table->unsignedBigInteger('clerk_id')->nullable(false);
            $table->unsignedBigInteger('session_id')->nullable(false);
            $table->bigInteger('provider_id')->default(1);
            $table->string('contact_id', 200)->nullable(false);       
            $table->tinyInteger('sent_received')->nullable(false);
            $table->longText('message')->nullable(false);
            $table->timestamps();

            $table->foreign("license_id")->references("id")->on("licenses");
            $table->foreign("clerk_id")->references("id")->on("clerks");
            $table->foreign("session_id")->references("id")->on("sessions");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('messages');
    }
}
