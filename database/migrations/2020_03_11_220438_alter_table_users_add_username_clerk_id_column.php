<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterTableUsersAddUsernameClerkIdColumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('username', 100)->nullable(true)->unique();
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
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign('users_clerk_id_foreign');

            $table->dropColumn('clerk_id');
            $table->dropColumn('username');
        });
    }
}
