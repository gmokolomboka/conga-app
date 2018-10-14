import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { ThemeModule } from '../../@theme/theme.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/customer.reducer';

@NgModule({
  imports: [
    CustomersRoutingModule,
    ThemeModule,
    StoreModule.forRoot({
      customer:reducer
    })
  ],
  declarations: [CustomersComponent, CreateCustomerComponent, CustomerDetailsComponent, CustomersListComponent],
})
export class CustomersModule { }



