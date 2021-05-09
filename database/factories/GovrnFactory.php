<?php

namespace Database\Factories;

use App\Models\Govrn;
use Illuminate\Database\Eloquent\Factories\Factory;

class GovrnFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Govrn::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name()
        ];
    }

}
