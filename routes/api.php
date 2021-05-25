<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Address;
use App\Http\Controllers\AddressController;
use App\Http\Controllers\GovernmentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('addresses', [AddressController::class, 'createAddress']);

Route::get('getUseraddresses', [AddressController::class, 'retrieveUserAddresses']);

Route::post('addGovernment',[GovernmentController::class, "addGovernment"]);

Route::get('getGovernmentsCount', [GovernmentController::class, 'retrieveGovernments']);

Route::get('getGovernmentsList', [GovernmentController::class, 'retrieveGovernmentsList']);

Route::post('deleteGovernment', [GovernmentController::class, 'deleteGovernment']);