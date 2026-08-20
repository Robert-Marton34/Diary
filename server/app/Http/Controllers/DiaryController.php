<?php

namespace App\Http\Controllers;

use App\Models\Diary;
use Illuminate\Http\Request;

class DiaryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Diary::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            "title" => "required",
            "entry" => "required",

        ]);

        return Diary::create($validatedData);
    }

    /**
     * Display the specified resource.
     */
    public function show(Diary $diary)
    {
        return $diary;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Diary $diary)
    {
        $validatedData = $request->validate([
        "title" => "required",
        "entry" => "required",
         ]);

        $diary->update($validatedData);

        return response()->json($diary, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Diary $diary)
    {
        //
    }
}
