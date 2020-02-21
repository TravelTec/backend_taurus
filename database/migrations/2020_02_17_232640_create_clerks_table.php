<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClerksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clerks', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('license_id')->nullable(false);
            $table->unsignedBigInteger("department_id")->nullable(false);
            $table->string("name", 60)->nullable(false);
            $table->string("email", 150)->nullable(false);
            $table->timestamps();

            $table->foreign("license_id")->references("id")->on("licenses");
            $table->foreign("department_id")->references("id")->on("departments");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clerks');
    }
}
