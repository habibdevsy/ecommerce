<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Http\Resources\CategoryResource;
use App\Http\Requests\CategoryRequest;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::all();
        return response()->json(['msg' => 'data fetched successfully', 'status_Code' => 201, 'data' => $categories], 201);
      }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CategoryRequest $request)
    {
        $category = Category::create($request->validated());
        $category->save();
        $category =  new CategoryResource($category);
        return response()->json(['msg' => 'data saved error', 'status_Code' => 201, 'data' => $category], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $category = Category::find($id);
        $category = new CategoryResource($category);
        return response()->json(['msg' => 'data fetched successfully', 'status_Code' => 201, 'data' => $category], 201);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CategoryRequest $request, $id)
    {
        $category = Category::find($id);
        if($category){
            $category->update($request->validated());
            $category = new CategoryResource($category);
        }
        return response()->json(['msg' => 'data updated successfully', 'status_Code' => 201, 'data' => $category], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $category->delete();
        return response()->json(['msg' => 'data deleted successfully', 'status_Code' => 201], 201);
    }

    /**
     * Show products for a specific category
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function categoryWithProducts($id)
    {
        $items = Category::select('id','name')->with('products:*')->find($id);
        return response()->json(['msg' => 'data fetched successfully', 'status_Code' => 201, 'data' => $items], 201);
    }
}
