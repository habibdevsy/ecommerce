<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use Illuminate\Http\JsonResponse;
use App\Models\Brand;
use App\Http\Resources\BrandResource;
use App\Http\Requests\BrandRequest;

class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        $brands = Brand::all();
        return response()->json(['msg' => 'data fetched successfully', 'status_Code' => 201, 'data' => $brands], 201);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param BrandRequest $request
     * @return JsonResponse
     */
    public function store(BrandRequest $request): JsonResponse
    {

        $brand = Brand::create($request->validated());
        $brand->save();
        $brand =  new BrandResource($brand);
        return response()->json(['msg' => 'data saved error', 'status_Code' => 201, 'data' => $brand], 201);

    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return JsonResponse
     */
    public function show(int $id): JsonResponse
    {
        $brand = Brand::find($id);
        $brand = new CategoryResource($brand);
        return response()->json(['msg' => 'data fetched successfully', 'status_Code' => 201, 'data' => $brand], 201);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param BrandRequest $request
     * @param int $id
     * @return JsonResponse
     */
    public function update(BrandRequest $request, int $id): JsonResponse
    {
        $brand = Brand::find($id);
        if($brand){
            $brand->update($request->validated());
            $brand = new BrandResource($brand);
        }
        return response()->json(['msg' => 'data updated successfully', 'status_Code' => 201, 'data' => $brand], 201);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Brand $brand
     * @return JsonResponse
     */
    public function destroy(Brand $brand): JsonResponse
    {
        $brand->delete();
        return response()->json(['msg' => 'data deleted successfully', 'status_Code' => 201], 201);
    }

    /**
     * Show products for a specific category
     *
     * @return JsonResponse
     */
    public function brandsWithProducts(): JsonResponse
    {
       $brands = Brand::select('id','name')->with('products:*')->get();
        return response()->json(['msg' => 'data fetched successfully', 'status_Code' => 201, 'data' => $brands], 201);
    }
}
