import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Customer } from '../models/Customer';
import { DotnetcoreService} from '../services/dotnetcore.service'

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  constructor(private service:DotnetcoreService,private router:Router,private route: ActivatedRoute) { }
  customer:Customer=new Customer(
    0,'','','','','','',''
  );

  ngOnInit(): void {
  }
  addCustomer(){
    this.service.addCustomer(this.customer).subscribe((res) =>{
      console.log(res);
      alert('Customer added.');
      window.location.reload();
    })
  }

}
