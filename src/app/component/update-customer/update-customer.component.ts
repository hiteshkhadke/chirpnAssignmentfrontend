import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Customer } from 'src/app/entity/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css'],
})
export class UpdateCustomerComponent implements OnInit {
  myUpdateForm: FormGroup;
  customer: Customer;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'age'];
  dataSource: Observable<any>;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customer = new Customer();
    this.myUpdateForm = new FormGroup({
      id: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      age: new FormControl(),
    });
  }

  onUpdateClick(): void {
    this.customer._id = this.myUpdateForm.get('id').value;
    this.customer.firstName = this.myUpdateForm.get('firstName').value;
    this.customer.lastName = this.myUpdateForm.get('lastName').value;
    this.customer.age = this.myUpdateForm.get('age').value;
    this.customerService
      .updateCustomer(this.customer._id, this.customer)
      .subscribe((_response) => {
        if (_response) console.log = _response;
        this.dataSource = _response;
      });
  }
}
