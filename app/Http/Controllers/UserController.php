<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;


class UserController extends Controller
{
    public function index() {
        return User::all();
    }

    public function show($id) {
        return User::findOrFail($id);
    }

    public function store(Request $request) {
        $data = $request->validate([
            'fname'=>'required',
            'lname'=>'required',
            'username'=>'required|unique:users',
            'pass'=>'required',
            'img'=>'nullable',
            'admin'=>'boolean'
        ]);
        // hash the password before storing
        $data['pass'] = password_hash($data['pass'], PASSWORD_DEFAULT);
        return User::create($data);
    }

    public function update(Request $request, $id) {
        $user = User::findOrFail($id);
        $user->update($request->all());
        return $user;
    }

    public function destroy($id) {
        User::destroy($id);
        return response()->json(['message'=>'deleted']);
    }

    // login
    public function login(Request $request) {
        $data = $request->validate([
            'username'=>'required',
            'pass'=>'required'
        ]);

        $user = User::where('username', $data['username'])->with('favCourses')->first();
        if (!$user || !password_verify($data['pass'], $user->pass)) {
            return response()->json(['message'=>'Invalid credentials'], 401);
        }
        // generate a jwt token for the user
        
        return $user;
    }
}