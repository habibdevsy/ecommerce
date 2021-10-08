import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductDetailImages } from '../models/ProductDetailImages.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api_url = "http://127.0.0.1:8000/api/user/product/";
  constructor(private http:HttpClient) {  }

  handleError(error:HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Error: ', error.error.message)
    }
    else {
      console.error("Error from server: " + error.status + " error was: "+ error.error)
    }
    return throwError('server Error');
  }

  getProductsByCategory($categoryId): Observable<Product[]>{
    return this.http.get<Product[]>(this.api_url + 'productsByCategory/'+$categoryId)
    .pipe(
      tap(() => console.log('Users retrieved!')),
      catchError(this.handleError)
    );
  }

  getProductsByBrand($brandId,$params): Observable<Product[]>{
    console.log(this.api_url + 'productsByBrand/'+$brandId+$params);
    return this.http.get<Product[]>(this.api_url + 'productsByBrand/'+$brandId+$params)
    .pipe(
      tap(() => console.log('Users retrieved!')),
      catchError(this.handleError)
    );
  }

  getProductsByBest(): Observable<Product[]>{
    return this.http.get<Product[]>(this.api_url + 'productsBest')
    .pipe(
      tap(() => console.log('Users retrieved!')),
      catchError(this.handleError)
    );
  }

  getProductDetailImages($id):ProductDetailImages[] {

    return [
      {
        id: 1,
        image: 'assets/images/products/product-1.jpg',
        productId:1
      },
      {
        id: 2,
        image: 'assets/images/products/product-1.jpg',
        productId:1
      },
      {
        id: 3,
        image: 'assets/images/products/product-1.jpg',
        productId:2
      },

    ]
  }
}
