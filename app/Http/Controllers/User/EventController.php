<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Events;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    public function detail($slug){
        $event = Events::where('slug', '=', $slug)->firstOrFail();

        return Inertia::render('DetailEvents', [
            'event' => $event,
        ]);
    }
}
