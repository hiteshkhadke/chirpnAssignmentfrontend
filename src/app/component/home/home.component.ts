import { Component, OnInit } from '@angular/core';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { DeleteCustomerComponent } from '../delete-customer/delete-customer.component';
import { SearchCustomerComponent } from '../search-customer/search-customer.component';
import { UpdateCustomerComponent } from '../update-customer/update-customer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dynamicComponent: any = SearchCustomerComponent;

  constructor() {}

  ngOnInit(): void {
    this.disableGoBackBtn();
  }

  assignComponent(component) {
    if (component === 'add') {
      this.dynamicComponent = AddCustomerComponent;
    } else if (component === 'update') {
      this.dynamicComponent = UpdateCustomerComponent;
    } else if (component === 'delete') {
      this.dynamicComponent = DeleteCustomerComponent;
    } else {
      this.dynamicComponent = SearchCustomerComponent;
    }
    this.disableGoBackBtn();
  }

  onGoBackClick() {
    this.assignComponent('');
  }
  disableGoBackBtn(): any {
    if (this.dynamicComponent == SearchCustomerComponent) {
      return true;
    } else {
      return false;
    }
  }
}
