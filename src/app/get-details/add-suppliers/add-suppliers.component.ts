import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-add-suppliers',
  templateUrl: './add-suppliers.component.html',
  styleUrls: ['./add-suppliers.component.scss']
})
export class AddSuppliersComponent implements OnInit {

  addSuppliers:FormGroup
  billingAddress:FormGroup;

  constructor(private suppliersServices: SupplierService, private fb:FormBuilder, private router:Router) {

    this.billingAddress=this.fb.group({
      address1:['',Validators.required],
      address2:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      country:['',Validators.required],
    });

    this.addSuppliers=this.fb.group({
      supplier_id:['',[Validators.required]],
      name:['',[Validators.required,Validators.maxLength(15)]],
      id:['',Validators.required],
      product_name:['',Validators.required],
      price:['',Validators.required],
      supplierAddress:this.billingAddress
    });
   }

  ngOnInit(): void {
  }

  // addSuppliers=new FormGroup(
  //   {
  //     supplier_id:new FormControl('',Validators.required),
  //     name:new FormControl('',Validators.required),
  //     id:new FormControl('',Validators.required),
  //     product_name:new FormControl('',Validators.required),
  //     price:new FormControl('',Validators.required),
  //   }
  // )

  addSupplier(){
    console.log(this.addSuppliers.value)
    this.suppliersServices.addSupplier(this.addSuppliers)
    this.router.navigateByUrl('suppliers')
  }

  get f(){
    return this.addSuppliers.controls;
  }

  // get supplier_id(){
    // return this.addSuppliers.get('supplier_id');
  //   return this.f['supplier_id'];
  // }

  // get name(){
  //   //return this.addSuppliers.get('name');
  //   return this.f['name'];
  // }

  // get id(){
  //   return this.addSuppliers.get('id');
  // }

  // get product_name(){
  //   return this.addSuppliers.get('product_name');
  // }
  // get price(){
  //   return this.addSuppliers.get('price');
  // }

  // get address1(){
  //   return this.addSuppliers.get('address1');
  // }

  // get address2(){
  //   return this.addSuppliers.get('address2');
  // }

  // get city(){
  //   return this.addSuppliers.get('city');
  // }
  // get state(){
  //   return this.addSuppliers.get('state');
  // }
  // get country(){
  //   return this.addSuppliers.get('country');
  // }

  
}
