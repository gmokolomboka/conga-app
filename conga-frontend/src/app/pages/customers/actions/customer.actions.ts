import { Action } from '@ngrx/store';
import { Customer } from '../models/customer';

export const CREATE_CUSTOMER = 'Customer_Create';
export const DELETE_CUSTOMER = 'Customer_Delete';

export class CreateCustomer implements Action {
    readonly type = CREATE_CUSTOMER;

    constructor(public payload: Customer) { }
}

export class DeleteCustomer implements Action {
    readonly type = DELETE_CUSTOMER;

    constructor(public username: string) { }
}

export type Actions = CreateCustomer | DeleteCustomer;
