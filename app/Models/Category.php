<?php

namespace App\Models;

use App\Models\Blog;
use App\Models\Course;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ['name','img'];

    public function courses()
    {
        return $this->hasMany(Course::class, 'cat_id');
    }

    public function blogs()
    {
        return $this->hasMany(Blog::class, 'cat_id');
    }
}
