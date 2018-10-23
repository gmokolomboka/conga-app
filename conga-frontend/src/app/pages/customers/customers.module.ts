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
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffects } from './effects/customer.effects';
import { CustomerService } from './services/customer.service';
import { IsUpService } from './is-up/is-up.service';
import { IsUpComponent } from './is-up/is-up.component';


@NgModule({
  imports: [
    CustomersRoutingModule,
    ThemeModule,
    StoreModule.forRoot({ customer:reducer }),
    EffectsModule.forRoot([CustomerEffects])
  ],
  declarations: [CustomersComponent, CreateCustomerComponent, CustomerDetailsComponent, CustomersListComponent, IsUpComponent],
  providers: [CustomerService, IsUpService]
})
export class CustomersModule { }



