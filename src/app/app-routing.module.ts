import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './component/add-customer/add-customer.component';
import { DeleteCustomerComponent } from './component/delete-customer/delete-customer.component';
import { UpdateCustomerComponent } from './component/update-customer/update-customer.component';

const routes: Routes = [
  {path:'app-add-customer', component:AddCustomerComponent},
  {path:'app-delete-customer' , component:DeleteCustomerComponent},
  {path:'app-update-customer', component:UpdateCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
