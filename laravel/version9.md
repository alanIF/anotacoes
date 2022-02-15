* routes
    use App\Http\Controllers\OrderController;
    
    Route::controller(OrderController::class)->group(function () {
        Route::get('/orders/{id}', 'show');
        Route::post('/orders', 'store');
    });
* migrations
    - foreign key
        * $table->foreignIdFor(User::class)->constrained()->onDelete('cascade');  

        