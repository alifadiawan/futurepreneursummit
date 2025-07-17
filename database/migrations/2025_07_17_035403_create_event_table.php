<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('event', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('location');
            $table->string('date');
            $table->string('subtitle');
            $table->string('imageUrl')->nullable();
            $table->string('imagePath')->nullable();
            $table->string('featured_guest_star');
            $table->enum('status', ['upcoming', 'draft', 'publish'])->default('upcoming');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('event');
    }
};
