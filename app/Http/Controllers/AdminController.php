<?php

namespace App\Http\Controllers;

use App\Models\Keyboard;
use App\Http\Controllers\KeyboardController;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Index', [
            "uploadedState" => false
        ]);
    }

    public function batch(Request $request)
    {

        // Fetch keyboards from the request 
        $keyboards = $request->input('data');

        // Iterate over keyboards and save each one
        foreach ($keyboards as $keyboard) {
            Keyboard::create($keyboard);
        }

        return Inertia::render('Admin/Index', [
            "uploadedState" => true,
            "uploadedData" => Keyboard::all(),
        ]);
    }
}