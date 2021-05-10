<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'government_id'
    ];

    public function areas()
    {
        return $this->hasMany(Area::class);
    }

    public function government()
    {
        return $this->belongsTo(Government::class);
    }
}
