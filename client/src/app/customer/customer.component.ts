import { Component, OnInit } from '@angular/core';
import { DotnetcoreService} from '../services/dotnetcore.service'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private service:DotnetcoreService) { }
  CustomerList:any=[]
  ngOnInit(): void {
    this.refreshCustomerList();
  }

    refreshCustomerList(){
      this.service.getCustomerList().subscribe((data: any) => {
        this.CustomerList=data;
      });
    }

}
