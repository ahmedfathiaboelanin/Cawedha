<?php

namespace App\Models;

use App\Models\Category;
use App\Models\Fav;
use App\Models\Video;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $fillable = ['cat_id','name','img','descriprion'];

    public function category()
    {
        return $this->belongsTo(Category::class, 'cat_id');
    }

    public function videos()
    {
        return $this->hasMany(Video::class);
    }

    public function favUsers()
    {
        return $this->hasMany(Fav::class);
    }
}
