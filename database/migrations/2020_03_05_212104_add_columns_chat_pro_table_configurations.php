<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsChatProTableConfigurations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('configurations', function (Blueprint $table) {
            $table->string("endpoint_chatpro", 200)->nullable();
            $table->string("token_chatpro", 200)->nullable();
            $table->string("id_chatpro", 100)->nullable();
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
            $table->dropColumn("endpoint_chatpro");
            $table->dropColumn("token_chatpro");
            $table->dropColumn("id_chatpro");
        });
    }
}
