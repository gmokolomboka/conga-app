import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../models/customer';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { DeleteCustomer } from '../actions/customer.actions';

@Component({
  selector: 'customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customer: Customer;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  removeCustomer(username) {
    this.store.dispatch(new DeleteCustomer(username));
  }
}