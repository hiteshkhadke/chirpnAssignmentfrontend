import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/entity/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  customer: Customer;
  myAddForm: FormGroup;
  displayedColumns: string[] = ['_id', 'firstName', 'lastName', 'age'];
  dataSource: Observable<any>;
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customer = new Customer();
    this.myAddForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      age: new FormControl(),
    });
  }

  onAddClick() {
    this.customer.firstName = this.myAddForm.get('firstName').value;
    this.customer.lastName = this.myAddForm.get('lastName').value;
    this.customer.age = this.myAddForm.get('age').value;
    this.customerService
      .createCustomer(this.customer)
      .subscribe((_response) => {
        if (_response) console.log(_response);
        this.dataSource = _response;
      });
  }
}
