import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './component/home/home.component';
import { AddCustomerComponent } from './component/add-customer/add-customer.component';
import { DeleteCustomerComponent } from './component/delete-customer/delete-customer.component';
import { SearchCustomerComponent } from './component/search-customer/search-customer.component';
import { UpdateCustomerComponent } from './component/update-customer/update-customer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
const material: any[] = [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatCardModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddCustomerComponent,
    DeleteCustomerComponent,
    SearchCustomerComponent,
    UpdateCustomerComponent,
  ],
  imports: [...material],
  exports: [...material],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
