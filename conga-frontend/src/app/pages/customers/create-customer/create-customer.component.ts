import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { CreateCustomer } from '../actions/customer.actions';
import { Customer } from '../models/customer';
import {Actions, CREATE_CUSTOMER } from '../actions/customer.actions';

@Component({
  selector: 'create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  constructor(public store: Store<AppState>) { }

  ngOnInit() {
  }

  selectedCivility: string = '';

  onSelectedCivility (event: any) {
    this.selectedCivility = event.target.value;
  }

  saveCustomer(id,selectedCivility,username,lastname,firstname,email,age) {
    this.store.dispatch(new CreateCustomer(
      {
           id : id,
           civility : selectedCivility,
          userName : username,
          lastName : lastname,
          firstName : firstname,
          email : email,
          age : age,
          active : false
      }
    ));
  }
}
