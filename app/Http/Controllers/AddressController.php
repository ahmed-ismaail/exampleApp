<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Address;

class AddressController extends Controller
{
    public function createAddress(Request $request)
    {
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
}
