<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use App\Models\Brand;
use App\Http\Requests\ProductRequest;
use App\Http\Resources\ProductResource;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        // $products = Category::select('id','name')->with('products:*')->get();
        // return response()->json(['data' => $products], 201);
       //  $products =  ProductResource::collection(product::all());
      $products = product::paginate(10);
      return response()->json(['msg' => 'data fetched successfully', 'status_Code' => 201, 'data' => $products], 201);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ProductRequest $request
     * @return JsonResponse
     */
    public function store(ProductRequest $request): JsonResponse
    {
        $product = Product::create($request->validated());
        $product->save();
        $product =  new ProductResource($product);
        return response()->json(['msg' => 'data saved successfully', 'status_Code' => 201, 'data' => $product], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return JsonResponse
     */
    public function show(int $id): JsonResponse
    {
        $product = Product::find($id);
        $product = new ProductResource($product);
        return response()->json(['msg' => 'data fetched successfully', 'status_Code' => 201, 'data' => $product], 201);
        // $product = Product::find($id);
        // return response()->json(['data' => $product], 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ProductRequest $request
     * @param $id
     * @return JsonResponse
     */
    public function update(ProductRequest $request, $id): JsonResponse
    {
        $product = Product::find($id);
        if($product){
            $product->update($request->validated());
            $product = new ProductResource($product);
        }
        return response()->json(['msg' => 'data updated successfully', 'status_Code' => 201, 'data' => $product], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Product $product
     * @return JsonResponse
     */
    public function destroy(Product $product): JsonResponse
    {
        $product->delete();
        return response()->json(['msg' => 'data deleted successfully', 'status_Code' => 201], 201);
    }

    /**
     * Show products for a specific category
     *
     * @param int $category_id
     * @return JsonResponse
     */
    public function productsOfCategory(int $category_id ): JsonResponse
    {
        //without category name
        $products  = Product::select()
                        ->where('category_id','=',$category_id)
                        ->paginate(10);
                        // ->get();
        // with category name
    //    $products = Category::select('id','name')->with('products:*')->find($category_id);
    return response()->json(['msg' => 'data fetched successfully', 'status_Code' => 201, 'data' => $products], 201);
    }

    /**
     * Show products for a specific brand
     *
     * @param int $brand_id
     * @return JsonResponse
     */
    public function productsOfBrand(int $brand_id ): JsonResponse
    {
        //without brand name
        $products  = Product::select()
                        ->where('brand_id','=',$brand_id)
                        ->paginate(10);
                        // ->get();
        // with brand name
        //    $products = Brand::select('id','name')->with('products:*')->find($brand_id);
        return response()->json(['msg' => 'data fetched successfully', 'status_Code' => 201, 'data' => $products], 201);
    }

    /**
     * Show products best
     *
     * @return JsonResponse
     */
    public function productsBest(): JsonResponse
    {
        $products  = Product::select()
                        ->where('isBest','=',1)
                        ->paginate(10);
                        // ->get();
        return response()->json(['msg' => 'data fetched successfully', 'status_Code' => 201, 'data' => $products], 201);
    }
}
