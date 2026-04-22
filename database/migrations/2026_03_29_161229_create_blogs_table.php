<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('cat_id')->nullable();
            $table->string('title');
            $table->longText('content');
            $table->date('date')->nullable();
            $table->string('author')->nullable();
            $table->string('img')->nullable();
            $table->unsignedBigInteger('views')->default(0);
            
            $table->timestamps();

            $table->foreign('cat_id')
                ->references('id')
                ->on('categories')
                ->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blogs');
    }
};
