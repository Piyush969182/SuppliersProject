import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-supplier-address',
  templateUrl: './add-supplier-address.component.html',
  styleUrls: ['./add-supplier-address.component.scss']
})
export class AddSupplierAddressComponent implements OnInit {
@Input() billingAddress!:FormGroup
  constructor() { }

  ngOnInit(): void {
  }
  
  get f(){
     const grp=this.billingAddress.get('supplierAddress') as FormGroup;
     return grp.controls;
  }
  
  // get address1(){
  //   const grp=this.billingAddress.get('supplierAddress') as FormGroup;
  //   return grp.get('address1');
  // }
  // get address2(){
  //   const grp=this.billingAddress.get('supplierAddress') as FormGroup;
  //   return grp.get('address2');
  // }
  // get city(){
  //   const grp=this.billingAddress.get('supplierAddress') as FormGroup;
  //   return grp.get('city');
  // }
  // get state(){
  //   const grp=this.billingAddress.get('supplierAddress') as FormGroup;
  //   return grp.get('state');
  // }
  // get country(){
  //   const grp=this.billingAddress.get('supplierAddress') as FormGroup;
  //   return grp.get('country');
  // }
}
