<?php

namespace App\Http\Controllers;

use App\Models\InactiveGovernments;
use Exception;

class InactiveGovernmentsController extends Controller
{
    public function addInactiveGovernment($collection)
    {
        try {
            InactiveGovernments::insert($collection["governments"]->toArray());

            return response()->json([
                "message" => "Inactive government record added successfully"
            ], 201);
        } catch (Exception $e) {
            return response()->json([
                "message" => $e->getMessage()
            ], 500);
        }
    }
}
