import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  api_url = "http://127.0.0.1:8000/";
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

  getAll(): Observable<Product>{
    return this.http.get<Product>(this.api_url + 'records/415')
    .pipe(
      tap(() => console.log('Users retrieved!')),
      catchError(this.handleError)
    );
  }


}
