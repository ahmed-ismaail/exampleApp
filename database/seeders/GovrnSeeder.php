<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Govrn;

class GovrnSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Govrn::factory()
        ->count(10)
        ->create();   
    }
}
