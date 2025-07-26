<?php

use App\Http\Controllers\User\EventController;
use App\Models\Events;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {

    $events = Events::orderBy('created_at','desc')->get();

    return Inertia::render('Home', [
        'events' => $events
    ]);
});


Route::get('/event-detail/{slug}', [EventController::class, 'detail'])->name('event.detail');