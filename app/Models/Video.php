<?php

namespace App\Models;

use App\Models\Course;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    protected $fillable = ['title','url','imgs','course_id'];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}