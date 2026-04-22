<?php

namespace App\Models;

use App\Models\Comment;
use App\Models\Fav;
use Illuminate\Database\Eloquent\Model;


class User extends Model
{
    protected $fillable = ['fname','lname','username','pass','img','admin'];

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function favCourses()
    {
        return $this->hasMany(Fav::class);
    }
}