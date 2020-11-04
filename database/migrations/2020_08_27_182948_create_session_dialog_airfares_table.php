<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSessionDialogAirfaresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('session_dialog_airfares', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('session_id')->nullable(false);
            $table->bigInteger('type_id')->default(0);
            $table->string('destiny_term')->nullable(true);
            $table->string('destiny_id')->nullable(true);
            $table->string('departure_date')->nullable(true);
            $table->string('boarding_location_term')->nullable(true);
            $table->string('boarding_location_id')->nullable(true);
            $table->string('return_date')->nullable(true);
            $table->json('offer_content')->nullable(true);
            $table->boolean('finished')->nullable(true);
            $table->timestamps();

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
        Schema::dropIfExists('session_dialog_airfares');
    }
}
