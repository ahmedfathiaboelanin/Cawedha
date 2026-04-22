<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function index() {
        return Course::with('category')->get();
    }

    public function show($id) {
        return Course::with('category','videos')->findOrFail($id);
    }

    public function store(Request $request) {
        return Course::create($request->all());
    }

    public function update(Request $request, $id) {
        $c = Course::findOrFail($id);
        $c->update($request->all());
        return $c;
    }

    public function destroy($id) {
        Course::destroy($id);
        return response()->json(['message'=>'deleted']);
    }
}
