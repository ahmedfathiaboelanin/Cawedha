<?php

namespace App\Models;

use App\Models\Course;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class Fav extends Model
{
    protected $table = 'fav_courses';

    protected $fillable = ['user_id','course_id','progress'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}
