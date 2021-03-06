<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Government extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'IsActive'
    ];

    public function cities()
    {
        return $this->hasMany(City::class);
    }  
    
    public function inactiveGovernments()
    {
        return $this->hasMany(InactiveGovernments::class);
    } 
}
