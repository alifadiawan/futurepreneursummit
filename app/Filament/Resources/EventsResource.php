<?php

namespace App\Filament\Resources;

use App\Filament\Resources\EventsResource\Pages;
use App\Filament\Resources\EventsResource\RelationManagers;
use App\Models\Events;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class EventsResource extends Resource
{
    protected static ?string $model = Events::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')->required(),
                Forms\Components\TextInput::make('location')->required(),
                Forms\Components\DatePicker::make('date')->required(),
                Forms\Components\TextInput::make('subtitle'),
                Forms\Components\TextInput::make('imageUrl'),
                Forms\Components\FileUpload::make('imagePath'),
                Forms\Components\TextInput::make('featured_guest_star'),
                Forms\Components\Select::make('status')
                    ->options([
                        'Upcoming' => 'Upcoming',
                        'Draft' => 'Draft',
                        'Published' => 'Published',
                    ])->required()
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')->searchable(),
                Tables\Columns\TextColumn::make('location')->searchable(),
                Tables\Columns\TextColumn::make('date')->searchable(),
                Tables\Columns\ImageColumn::make('imagePath'),
                Tables\Columns\IconColumn::make('status')
                    ->color(fn(string $state): string => match ($state) {
                        'Upcoming' => 'info',
                        'Draft' => 'warning',
                        'Published' => 'success',
                        default => 'gray',
                    }),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListEvents::route('/'),
            'create' => Pages\CreateEvents::route('/create'),
            'edit' => Pages\EditEvents::route('/{record}/edit'),
        ];
    }
}
