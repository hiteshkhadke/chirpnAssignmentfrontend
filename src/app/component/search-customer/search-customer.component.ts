import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css'],
})
export class SearchCustomerComponent implements OnInit {
  myForm: FormGroup;
  dataSource: Observable<any>;
  selectedValue: any;
  searchedValue: any;
  displayedColumns: string[] = ['_id', 'firstName', 'lastName', 'age'];

  searchOptions: any[] = [
    { category: 'Id', actualValue: '_id', hint: 'Ok choice' },
    {
      category: 'First Name',
      actualValue: 'firstName',
      hint: 'Great choice',
    },
    {
      category: 'Last Name',
      actualValue: 'lastName',
      hint: 'Great choice',
    },
    {
      category: 'Age',
      actualValue: 'age',
      hint: 'Good choice',
    },
  ];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      selectedValue: new FormControl(),
      searchedValue: new FormControl(),
    });
    this.reloadData();
  }

  reloadData() {
    this.customerService.getCustomerList().subscribe((resp) => {
      if (resp) {
        this.dataSource = resp;
      }
    });
  }

  onSearchClick() {
    this.searchedValue = this.myForm.get('searchedValue').value;
    this.selectedValue = this.myForm.get('selectedValue').value;
    //console.log(this.searchedValue, this.selectedValue);
    this.customerService
      .getCriteria(this.selectedValue, this.searchedValue)
      .subscribe((_response) => {
        if (_response) this.dataSource = _response;
      });
  }
}
