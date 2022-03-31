import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupplierService } from '../services/supplier.service';

@Component({
  selector: 'app-get-details',
  templateUrl: './get-details.component.html',
  styleUrls: ['./get-details.component.scss']
})
export class GetDetailsComponent implements OnInit {

  suppliers_list: any[]=[]
  filteredString:string=""
  constructor(private suppliersServices:SupplierService, private router:Router) { }

  ngOnInit(): void {
    this.suppliers_list = this.suppliersServices.onGet();
    // this.router.navigateByUrl('suppliers');
  }

}
