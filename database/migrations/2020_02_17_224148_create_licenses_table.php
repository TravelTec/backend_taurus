<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLicensesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('licenses', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer("status")->nullable(false)->default(0);
            $table->string("signature", 255)->nullable(false);
            $table->string("contact", 100)->nullable(false);
            $table->string("email", 150)->nullable(false);
            $table->string("cellphone", 40)->nullable();
            $table->string("cellphone_app", 40)->nullable(false);
            $table->decimal("credits", 15, 2)->nullable(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('licenses');
    }
}
