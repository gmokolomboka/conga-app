import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Customer } from '../models/customer';
import { Observable,throwError } from 'rxjs';
import { api } from '../api/customer-api';
import { catchError, tap, map } from 'rxjs/operators';
  
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http: HttpClient) { }

  createCustomer(customer: Customer): Observable<any>{
    return this.http.post(`${api.create}`, customer);
  }


  deleteCustomer(id: number): Observable<any>{
    return this.http.post(`${api.delete}`, id);
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>("URL")
      .pipe(
          tap(data => console.log(JSON.stringify(data)), 
          catchError(this.handleError)));
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
