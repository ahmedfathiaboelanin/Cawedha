<?php

namespace App\Http\Controllers;

use App\Models\Fav;
use Illuminate\Http\Request;

class FavController extends Controller
{
    public function index() {
        return Fav::with('user','course')->get();
    }

    public function store(Request $request) {
        try{
            $data = $request->validate([
                'user_id'=>'required|exists:users,id',
                'course_id'=>'required|exists:courses,id',
                'progress'=>'min:0|max:100'
            ]);
            return Fav::create($data);
        } catch (\Exception $e) {
            return response()->json(['message'=>$e->getMessage()], 400);
        }
    }

    public function saveProgress(Request $request) {
        try{
            $data = $request->validate([
                'progress'=>'required|min:0|max:100'
            ]);
            $fav = Fav::where('user_id', $request->user_id)
                ->where('course_id', $request->course_id)
                ->firstOrFail();
            $fav->update($data);
            return $fav;
        } catch (\Exception $e) {
            return response()->json(['message'=>$e->getMessage()], 400);
        }
    }


    public function getUserFavorites($userId) {
        return Fav::with('course')->where('user_id', $userId)->get();
    }

    public function destroy($id) {
        Fav::destroy($id);
        return ['message'=>'removed'];
    }
}
