<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Government;

class GovernmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Government::factory()
        ->count(10)
        ->create();   
    }
}
