<?php

namespace App\Http\Controllers;

use App\Models\Government;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Exception;
use Illuminate\Support\Facades\DB;

class GovernmentController extends Controller
{
    public function addGovernment(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'nullable'
            ]);

            if ($validator->fails()) {
                return response()->json([
                    "message" => "bad request"
                ], 400);
            } else {
                $government = new Government();
                $government->name = $request->name;
                $government->save();

                return response()->json([
                    "message" => "government record created"
                ], 201);
            }
        } catch (Exception $e) {
            return response()->json([
                "message" => $e->getMessage()
            ], 500);
        }
    }
    public function retrieveGovernments()
    {
        try {
            $governmentsCount = Government::count();
            return response()->json($governmentsCount, 200);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), $e->getCode());
        }
    }

    public function retrieveGovernmentsList()
    {
        try {
            $governmentsList = Government::get();
            return response()->json($governmentsList, 200);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), $e->getCode());
        }
    }

    public function deleteGovernment(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'id' => 'required|exists:governments,id'
            ]);

            if ($validator->fails()) {
                return response()->json([
                    "message" => "Bad request, No government with this id"
                ], 400);
            } else {
                Government::destroy($request->id);
                return response()->json("government deleted successfully", 200);
            }
        } catch (Exception $e) {
            return response()->json($e->getMessage(), $e->getCode());
        }
    }
}
