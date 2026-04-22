<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index() {
        return Category::get();
    }

    public function show($id) {
        return Category::with('courses','blogs')->findOrFail($id);
    }

    public function store(Request $request) {
        return Category::create($request->all());
    }

    public function update(Request $request, $id) {
        $c = Category::findOrFail($id);
        $c->update($request->all());
        return $c;
    }

    public function destroy($id) {
        Category::destroy($id);
        return response()->json(['message'=>'deleted']);
    }
}
