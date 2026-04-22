<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index() {
        return Blog::with('category','comments')->get();
    }

    public function show($id) {
        return Blog::with('category','comments')->findOrFail($id);
    }

    public function store(Request $request) {
        return Blog::create($request->all());
    }

    public function update(Request $request, $id) {
        $b = Blog::findOrFail($id);
        $b->update($request->all());
        return $b;
    }

    public function destroy($id) {
        Blog::destroy($id);
        return response()->json(['message'=>'deleted']);
    }
}
