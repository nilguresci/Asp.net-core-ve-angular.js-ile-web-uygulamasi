import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Customer } from '../models/Customer';
import { DotnetcoreService} from '../services/dotnetcore.service'

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(private service:DotnetcoreService,private router:Router,private route: ActivatedRoute) { }
  customer:Customer=new Customer(
    0,'','','','','','',''
  );

  CustomerList:Customer[]=[];
  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.customer.Id = params['Id'];
      this.service.getCustomerWId(this.customer.Id).subscribe((data: any) => {
        console.log(data[0]);
        this.customer=data[0];
        console.log('customer datası alındı')
      });
      console.log(this.customer);
    });

    
  }

  refreshCustomerList(){
    this.service.getCustomerList().subscribe((data: any) => {
      this.CustomerList=data;
    });
  }

  goUpdate(Id:number){
    this.router.navigate([`/customer/update/${Id}`]);
  }

  deleteCustomer(Id:number){
this.CustomerList=this.CustomerList.filter((c) => c.Id !==Id);
    this.service.deleteCustomer(Id).subscribe();
    this.router.navigate([`/customers`]);
  }

}
