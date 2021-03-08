import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Customer } from '../models/Customer';
import { DotnetcoreService} from '../services/dotnetcore.service'
@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  constructor(private service:DotnetcoreService,private router:Router,private route: ActivatedRoute) { }
  customer:Customer=new Customer(
    0,'','','','','','',''
  );
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

  customerUpdate(){
this.service.updateCustomer(this.customer.Id,this.customer).subscribe((res) => {

  this.router.navigate(['/customers']);
})
  }

  

}
