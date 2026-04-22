<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    public function index() {
        return Video::with('course')->get();
    }

    public function show($id) {
        return Video::with('course')->findOrFail($id);
    }

    public function store(Request $request) {
        return Video::create($request->all());
    }

    public function update(Request $request, $id) {
        $v = Video::findOrFail($id);
        $v->update($request->all());
        return $v;
    }

    public function destroy($id) {
        Video::destroy($id);
        return ['message'=>'deleted'];
    }
}
