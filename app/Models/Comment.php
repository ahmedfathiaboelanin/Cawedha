<?php

namespace App\Models;

use App\Models\Blog;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = ['content','article_id','user_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function blog()
    {
        return $this->belongsTo(Blog::class, 'article_id');
    }
}