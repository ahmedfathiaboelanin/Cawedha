<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index() {
        return Article::with('comments')->get();
    }

    public function show($id) {
        return Article::with('comments')->findOrFail($id);
    }

    public function store(Request $request) {
        return Article::create($request->all());
    }

    public function update(Request $request, $id) {
        $a = Article::findOrFail($id);
        $a->update($request->all());
        return $a;
    }

    public function destroy($id) {
        Article::destroy($id);
        return ['message'=>'deleted'];
    }
}