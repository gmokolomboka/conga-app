import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';

@Component({
  selector: 'customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

  customers: Observable<Customer[]>;

  constructor(public store: Store<AppState>) {
    this.customers = store.select('customer');
  }

  ngOnInit() {
  }

}
