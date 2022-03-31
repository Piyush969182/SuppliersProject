import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetDetailsRoutingModule } from './get-details-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetDetailsByIdComponent } from './get-details-by-id/get-details-by-id.component';
import { AddSupplierAddressComponent } from './add-supplier-address/add-supplier-address.component';
import { GetDetailsComponent } from './get-details.component';
import { FilterPipe } from '../filter/filter.pipe';
import { EditSupplierComponent } from './edit-supplier/edit-supplier.component';


@NgModule({
  declarations: [
    GetDetailsByIdComponent,
    GetDetailsComponent,
    FilterPipe,
    EditSupplierComponent
  ],
  imports: [
    CommonModule,
    GetDetailsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
   
  ]
})
export class GetDetailsModule { }
