import { Action } from '@ngrx/store';
import { Customer } from '../models/customer';

export const CREATE_CUSTOMER = 'Customer_Create';
export const DELETE_CUSTOMER = 'Customer_Delete';

export const CREATE_CUSTOMER_SUCCESS = 'Customer_Create_Success';
export const CREATE_CUSTOMER_FAILED = 'Customer_Create_Failed';


export class CreateCustomer implements Action {
    readonly type = CREATE_CUSTOMER;

    constructor(public payload: Customer) { }
}


export class CreateCustomerSuccess implements Action {
    readonly type = CREATE_CUSTOMER_SUCCESS;

    constructor(public payload: Customer) { }
}


export class CreateCustomerFailed implements Action {
    readonly type = CREATE_CUSTOMER_FAILED;

    constructor(public payload: string ) { }
}


export class DeleteCustomer implements Action {
    readonly type = DELETE_CUSTOMER;

    constructor(public username: string) { }
}

export type Actions = CreateCustomer 
| DeleteCustomer
| CreateCustomerSuccess
| CreateCustomerFailed;
