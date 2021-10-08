import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  api_url = "http://127.0.0.1:8000/api/user/category/";
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

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.api_url + 'categories')
    .pipe(
      tap(() => console.log('Users retrieved!')),
      catchError(this.handleError)
    );
  }

 getCategoriesWithProducts(): Observable<Category[]>{
    return this.http.get<Category[]>(this.api_url + 'categoriesWithProducts')
    .pipe(
      tap(() => console.log('Users retrieved!')),
      catchError(this.handleError)
    );
  }
}
