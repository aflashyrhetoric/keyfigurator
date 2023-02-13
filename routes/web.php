<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\BuildController;
use App\Http\Controllers\KeyboardController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// ************************
// Application Logic Routes
// ************************

Route::resource('keyboards', KeyboardController::class)
    ->only(['index', 'store'])
    ->middleware(['auth', 'verified']);
    
Route::resource('builds', BuildController::class)
    ->only(['index', 'store'])
    ->middleware(['auth', 'verified']);

Route::get('/admin', [AdminController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name("admin.index");

Route::post('/admin', [AdminController::class, 'batch'])
    ->middleware(['auth', 'verified'])
    ->name("admin.batch");
   

// ************************
// ************************
// ************************
// ***Boilerplate Stuff****
// ***VVVVVVVVVVVVVVVVV****
// ************************
// ************************
// ************************

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__ . '/auth.php';