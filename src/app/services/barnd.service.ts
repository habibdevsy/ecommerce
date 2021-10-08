import { Injectable } from '@angular/core';
import { Brand } from '../models/brand.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BarndService {

  api_url = "http://127.0.0.1:8000/api/user/brand/";
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

  getBrands(): Observable<Brand[]>{
    return this.http.get<Brand[]>(this.api_url + 'brands')
    .pipe(
      tap(() => console.log('Users retrieved!')),
      catchError(this.handleError)
    );
  }

  getBrandsWithProducts(): Observable<Brand[]>{
    return this.http.get<Brand[]>(this.api_url + 'brandsWithProducts')
    .pipe(
      tap(() => console.log('Users retrieved!')),
      catchError(this.handleError)
    );
  }
}
