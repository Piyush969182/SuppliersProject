import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { supplier } from '../models/supplier.model';
import { SupplierService } from '../services/supplier.service';

@Component({
  selector: 'app-get-details',
  templateUrl: './get-details.component.html',
  styleUrls: ['./get-details.component.scss']
})
export class GetDetailsComponent implements OnInit {

  suppliers_list: supplier[]=[]
  filteredString:string=""
  constructor(private suppliersServices:SupplierService, private router:Router) { }

  ngOnInit(): void {
    this.suppliers_list = this.suppliersServices.onGet();
    // this.suppliersServices.onGet().subscribe(s=>{
    //   console.log(s)
    // });
  }
  delete(id:number){
     this.suppliersServices.delete(id).subscribe(s=>{
      console.log(s)
    });
  }

}
