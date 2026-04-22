<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\FavController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VideoController;
use Illuminate\Support\Facades\Route;


Route::apiResource('users', UserController::class);
Route::post('users/login', [UserController::class, 'login']);

Route::apiResource('categories', CategoryController::class);
Route::apiResource('courses', CourseController::class);
Route::apiResource('blogs', BlogController::class);
Route::apiResource('articles', ArticleController::class);
Route::apiResource('comments', CommentController::class);
Route::apiResource('videos', VideoController::class);
Route::apiResource('favorites', FavController::class);
Route::post('favorites/progress', [FavController::class, 'saveProgress']);
Route::get('favorites/user/{userId}', [FavController::class, 'getUserFavorites']);