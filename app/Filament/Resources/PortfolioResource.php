<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PortfolioResource\Pages;
use App\Filament\Resources\PortfolioResource\RelationManagers;
use App\Models\Portfolio;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Str;
use Filament\Forms\Set;

class PortfolioResource extends Resource
{
    protected static ?string $model = Portfolio::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')
                    ->label('Title')
                    ->live()
                    ->afterStateUpdated(function (callable $set, $state) {
                        $baseSlug = Str::slug($state);
                        $slug = $baseSlug;

                        $i = 2;
                        while (Portfolio::where('slug', $slug)->exists()) {
                            $slug = $baseSlug . '-' . $i++;
                        }

                        $set('slug', $slug);
                    }),

                // Slug input (auto-filled, not editable)
                Forms\Components\TextInput::make('slug')
                    ->required()
                    ->maxLength(255)
                    ->unique(Portfolio::class, 'slug', fn($record) => $record),

                // Short description
                Forms\Components\TextInput::make('description')
                    ->label('Short Description'),

                // Detailed content
                Forms\Components\RichEditor::make('content')
                    ->label('Detailed Content'),

                // Image file upload
                Forms\Components\FileUpload::make('image_path')
                    ->label('Image'),

                // YouTube embed URL
                Forms\Components\TextInput::make('youtube_url')
                    ->label('YouTube URL')
                    ->url(),

                // Tags (comma-separated)
                Forms\Components\TextInput::make('tags')
                    ->label('Tags (comma separated)'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title'),
                Tables\Columns\TextColumn::make('image_path'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
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
            'index' => Pages\ListPortfolios::route('/'),
            'create' => Pages\CreatePortfolio::route('/create'),
            'edit' => Pages\EditPortfolio::route('/{record}/edit'),
        ];
    }
}
