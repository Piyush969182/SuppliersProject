import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSuppliersComponent } from './get-details/add-suppliers/add-suppliers.component';
import { GetDetailsComponent } from './get-details/get-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)

  },
  {
    path: 'getList',
    component: GetDetailsComponent
  },
  {
    path: 'suppliers', loadChildren: () => import('./get-details/get-details.module').then(m => m.GetDetailsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
