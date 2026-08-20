<?php

use App\Http\Controllers\DiaryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get("/diaries", [DiaryController::class, "index"]);
Route::get("/diaries/{diary}", [DiaryController::class, "show"]);
Route::post("/diaries", [DiaryController::class, "store"]);
Route::put('/diaries/{diary}', [DiaryController::class, 'update']);



Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
