import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../models/Customer';
import { DotnetcoreService} from '../services/dotnetcore.service'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private service:DotnetcoreService,private router:Router) { }
  CustomerList:Customer[]=[];

  ngOnInit(): void {
   
    this.refreshCustomerList();
  }

    refreshCustomerList(){
      this.service.getCustomerList().subscribe((data: any) => {
        this.CustomerList=data;
      });
    }

    getCustomerWId(Id:number){
      this.router.navigate([`/customer/${Id}`]);
    }

    goUpdate(Id:number){
      this.router.navigate([`/customer/update/${Id}`]);
    }

}
