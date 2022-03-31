import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.scss']
})
export class EditSupplierComponent implements OnInit {
  getSuppliers: FormGroup
  id!: number;
  details = {}
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private suppliersServices:SupplierService) { 
    this.getSuppliers = this.fb.group({
      supplier_id: [''],
      name: [''],
      id: [''],
      product_name: [''],
      price: [''],
      address1: [''],
      address2: [''],
      city: [''],
      state: [''],
      country: [''],
    });
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.details=this.suppliersServices.getDetailsById(this.id)
    this.getSuppliers.patchValue(this.details);
  }

}
