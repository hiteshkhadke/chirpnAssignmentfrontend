import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css'],
})
export class DeleteCustomerComponent implements OnInit {
  myDeleteForm: FormGroup;
  deleteMsg: any;
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.myDeleteForm = new FormGroup({
      id: new FormControl(),
      deleteMsg: new FormControl(),
    });
  }

  onDeleteClick(): void {
    this.customerService
      .deleteCustomer(this.myDeleteForm.get('id').value)
      .subscribe((_response) => {
        if (_response) this.deleteMsg = 'Customer deleted successfully..';
      });
  }
}
