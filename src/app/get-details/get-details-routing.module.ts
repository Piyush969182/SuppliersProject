import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSuppliersComponent } from './add-suppliers/add-suppliers.component';
import { EditSupplierComponent } from './edit-supplier/edit-supplier.component';
import { GetDetailsByIdComponent } from './get-details-by-id/get-details-by-id.component';
import { GetDetailsComponent } from './get-details.component';

const routes: Routes = [
  {
    path:'',
    component:GetDetailsComponent,
  },
      {
        path:'addSuppliers',
        component:AddSuppliersComponent
      },
      {
        path:'getDetailsById/:id',
        component:GetDetailsByIdComponent
      },
      {
        path:'editSupplier/:id',
        component:EditSupplierComponent
      }
    
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetDetailsRoutingModule { }
