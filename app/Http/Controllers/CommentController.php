<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function index() {
        return Comment::with('user','blog')->get();
    }

    public function show($id) {
        return Comment::with('user','blog')->findOrFail($id);
    }

    public function store(Request $request) {
        return Comment::create($request->all());
    }

    public function update(Request $request, $id) {
        $c = Comment::findOrFail($id);
        $c->update($request->all());
        return $c;
    }

    public function destroy($id) {
        Comment::destroy($id);
        return ['message'=>'deleted'];
    }
}
