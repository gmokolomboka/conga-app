import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersListComponent } from './customers-list/customers-list.component';


export const routes: Routes = [{
  path: '',
  component: CustomersComponent,
  children: [
    {
      path: 'create-customer',
      component: CreateCustomerComponent,
    }, 
    
    {
      path: 'customer-details',
      component: CustomerDetailsComponent,
    },
    
    {
      path: 'customers-list',
      component: CustomersListComponent,
    },
  ],
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
