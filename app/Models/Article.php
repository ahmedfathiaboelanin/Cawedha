<?php

namespace App\Models;

use App\Models\Comment;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = ['title','content','date','img'];

    public function comments()
    {
        return $this->hasMany(Comment::class, 'article_id');
    }
}
