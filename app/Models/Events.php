<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Events extends Model
{
    protected $table = 'event';

    protected $casts = [
        'highlights' => 'array',
        'speakers' => 'array',
    ];

    protected $guarded = [];    

    protected static function booted(): void
    {
        static::creating(function ($event) {
            if (empty($event->slug) && !empty($event->title)) {
                $event->slug = \Str::slug($event->title);
            }
        });
    }
}
