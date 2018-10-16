import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer';
/* NgRx */
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as customerActions from '../actions/customer.actions'
import { Action } from '@ngrx/store';

@Injectable()
export class CustomerEffects {

  constructor(private customerService: CustomerService,
              private actions$: Actions) { }

  @Effect()
  createCustomer$: Observable<Action> = this.actions$.pipe(
    ofType(customerActions.CREATE_CUSTOMER),
    map((action: customerActions.CreateCustomer) => action.payload),
    mergeMap((customer: Customer) =>
      this.customerService.createCustomer(customer).pipe(
        map(newCustomer => (new customerActions.CreateCustomerSuccess(newCustomer))),
        catchError(err => of(new customerActions.CreateCustomerFailed(err)))
      )
    )
  );
}
