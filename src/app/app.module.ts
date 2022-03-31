import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddSuppliersComponent } from './get-details/add-suppliers/add-suppliers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetDetailsComponent } from './get-details/get-details.component';
import { FilterPipe } from './filter/filter.pipe';
import { AddSupplierAddressComponent } from './get-details/add-supplier-address/add-supplier-address.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddSuppliersComponent,
    AddSupplierAddressComponent,
    // GetDetailsComponent,
    // FilterPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
