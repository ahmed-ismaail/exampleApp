<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AddressController;
use App\Http\Controllers\GovernmentController;
use App\Http\Controllers\InactiveGovernmentsController;
use App\Http\Controllers\UserController;

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

Route::post('addUser', [UserController::class, 'createUser']);

Route::post('addresses', [AddressController::class, 'createAddress']);

Route::get('getUseraddresses', [AddressController::class, 'retrieveUserAddresses']);

Route::post('addGovernment', [GovernmentController::class, "addGovernment"]);

Route::get('getGovernmentsCount', [GovernmentController::class, 'retrieveGovernments']);

Route::get('getGovernmentsList', [GovernmentController::class, 'retrieveGovernmentsList']);

Route::post('deleteGovernment', [GovernmentController::class, 'deleteGovernment']);

Route::post('makeGovernmentsInactive', [GovernmentController::class, 'updateUnattachedGovernmentsToInActive']);

Route::post('addInactiveGovernment', [InactiveGovernmentsController::class, 'addInactiveGovernment']);

Route::get('getGovernmentsId', [GovernmentController::class, 'retrieveGovernmentsId']);
