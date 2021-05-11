<?php

namespace Database\Factories;

use App\Models\Address;
use Illuminate\Database\Eloquent\Factories\Factory;

class AddressFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Address::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'street' => $this->faker->regexify('[A-Za-z0-9]{20}'),
            'buildingNo' => $this->faker->numberBetween($min = 1, $max = 10),
            'floorNo' => $this->faker->numberBetween($min = 1, $max = 10),
            'flatNo' => $this->faker->numberBetween($min = 1, $max = 10),
            'user_id' => $this->faker->numberBetween($min = 1, $max = 10)
        ];
    }
}
