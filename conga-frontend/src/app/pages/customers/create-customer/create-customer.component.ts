import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { CreateCustomer } from '../actions/customer.actions';
import { Customer } from '../models/customer';

@Component({
  selector: 'create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  customer$: Customer;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  selectedCivility: string = '';

  onSelectedCivility (event: any) {
    this.selectedCivility = event.target.value;
  }

  saveCustomerS(id,selectedCivility, username, lastname,firstname, email, age) {

    this.customer$ = new Customer(id,selectedCivility,username,lastname,firstname,email,age, false);
    this.store.dispatch(new CreateCustomer(this.customer$ ));
  }


  saveCustomer(id,selectedCivility,username,lastname,firstname,email,age) {
    this.store.dispatch(new CreateCustomer(
      {
           id : id,
           civility : selectedCivility,
          username : username,
          lastname : lastname,
          firstname : firstname,
          email : email,
          age : age,
          active : false
      }
    ));
  }
}
