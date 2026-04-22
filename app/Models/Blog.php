<?php

namespace App\Models;

use App\Models\Category;
use App\Models\Comment;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $fillable = ['cat_id','title','content'];

    public function category()
    {
        return $this->belongsTo(Category::class, 'cat_id');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class, 'article_id');
    }
}