<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnClerkIdTableConfigurations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('configurations', function (Blueprint $table) {
            $table->unsignedBigInteger('clerk_id')->nullable(true);

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
        Schema::table('configurations', function (Blueprint $table) {
            $table->dropForeign('configurations_clerk_id_foreign');

            $table->dropColumn('clerk_id');
        });
    }
}
