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
use Filament\Forms\Set;


use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\BadgeColumn;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\TimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Illuminate\Support\Str;


class EventsResource extends Resource
{
    protected static ?string $model = Events::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('title')
                    ->required()
                    ->maxLength(255)
                    ->live()
                    ->afterStateUpdated(fn(Set $set, ?string $state) => $set('slug', Str::slug($state))),

                TextInput::make('slug')
                    ->required()
                    ->maxLength(255)
                    ->dehydrated(true)
                    ->disabled(),

                TextInput::make('location')
                    ->required()
                    ->maxLength(255),

                DatePicker::make('date')
                    ->displayFormat('d F Y')
                    ->required(),

                TimePicker::make('time')
                    ->required(),

                TextInput::make('subtitle')
                    ->maxLength(255),

                RichEditor::make('description')
                    ->required(),

                FileUpload::make('imagePath')
                    ->directory('events') // optional: set directory
                    ->image()
                    ->imageEditor() // optional: allows basic cropping, etc.
                    ->maxSize(2048), // optional: 2MB limit

                Repeater::make('highlights')
                    ->schema([
                        TextInput::make('value')->label('Highlight'),
                    ])
                    ->label('Event Highlights')
                    ->columns(1),

                Select::make('status')
                    ->options([
                        'Upcoming' => 'Upcoming',
                        'Available' => 'Available',
                        'Done' => 'Done',
                    ])
                    ->default('upcoming')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')
                    ->searchable()
                    ->sortable()
                    ->limit(30),

                TextColumn::make('location')
                    ->sortable()
                    ->limit(20),

                TextColumn::make('date')
                    ->sortable()
                    ->date(),

                TextColumn::make('time')
                    ->sortable(),

                TextColumn::make('subtitle')
                    ->limit(30)
                    ->toggleable(isToggledHiddenByDefault: true),

                TextColumn::make('description')
                    ->limit(50)
                    ->toggleable(isToggledHiddenByDefault: true),

                ImageColumn::make('imagePath')
                    ->label('Image')
                    ->toggleable(isToggledHiddenByDefault: true),

                TextColumn::make('highlights')
                    ->label('Highlights')
                    ->formatStateUsing(fn($state) => is_array($state) ? implode(', ', $state) : $state)
                    ->limit(40)
                    ->toggleable(isToggledHiddenByDefault: true),

                BadgeColumn::make('status')
                    ->colors([
                        'info' => 'Upcoming',
                        'success' => 'Available',
                        'gray' => 'Done',
                    ])
                    ->sortable(),
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
