<?php

namespace App\Http\Controllers;

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
        return Inertia::render('Admin/Index', [
            "uploadedState" => true,
            "uploadedData" => $request->input('data')
        ]);
    }
}