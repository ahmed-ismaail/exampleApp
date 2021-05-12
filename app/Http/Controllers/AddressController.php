<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Address;
use Exception;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class AddressController extends Controller
{
    public function createAddress(Request $request)
    {

        try {
            $validator = Validator::make($request->all(), [
                'id' => 'required',
                'street' => 'nullable',
                'building_no' => 'nullable',
                'floor_no' => 'nullable',
                'flat_no' => 'nullable',
                'user_id' => 'required|exists:users,id',
                'area_id' => 'nullable|exists:areas,id',

            ]);

            if ($validator->fails()) {
                return response()->json([
                    "message" => "bad request"
                ], 400);
            } else {
                $address = new Address();
                $address->street = $request->street;
                $address->building_no = $request->building_no;
                $address->floor_no = $request->floor_no;
                $address->flat_no = $request->flat_no;
                $address->user_id = $request->user_id;
                $address->area_id = $request->area_id;
                $address->save();

                return response()->json([
                    "message" => "address record created"
                ], 201);
            }
        } catch (Exception $e) {
            return response()->json([
                "message" => $e->getMessage()
            ], 400);
        }
    }

    public function retrieveUserAddresses(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'user_id' => 'required|exists:users,id',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    "message" => "Bad request, No Addresses for this user."
                ], 400);
            } else {
                $userAddresses = DB::table('addresses')->orderByDesc('created_at')
                    ->where('user_id', $request->user_id)->get();
                return response()->json($userAddresses, 200);
            }
        } catch (Exception $e) {
            return response()->json($e->getMessage(), $e->getCode());
        }
    }
}
