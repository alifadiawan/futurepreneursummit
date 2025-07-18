<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
      User::create([
        'name' => 'Admin Future Preneur Summit',
        'email' => 'admin@futurepreneursummit.com',
        'password' => bcrypt('admin123'),
      ]);
    }
}
