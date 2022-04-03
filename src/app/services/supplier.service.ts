import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { supplier } from '../models/supplier.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  suppliers_list: any[] = [
    // {
    //   supplier_id: 1,
    //   name: "Piyush",
    //   id: "1",
    //   product_name:'Pencil' ,
    //   price: "10",
    //   supplierAddress:{
    //     address1: "vijay nagar",
    //     address2: "palasia",
    //     city: "Indore",
    //     state: "M.P",
    //     country: "India",
    //   }      
    // },
    {
      supplier_id: 1,
      name: "Piyush",
      id: "1",
      product_name:'Pencil' ,
      price: "10",
      address1: "vijay nagar",
      address2: "palasia",
      city: "Indore",
      state: "M.P",
      country: "India",
    },
    {
      supplier_id: 2,
      name: "Kunal",
      id: "2",
      product_name: "Notebook",
      price: "30",
      address1: "karve nagar",
      address2: "",
      city: "Pune",
      state: "MH",
      country: "India",
    },
    {
      supplier_id: 3,
      name: "Nitesh",
      id: "3",
      product_name: "Books",
      price: "500",
      address1: "karve nagar",
      address2: "khau gali",
      city: "Mumbai",
      state: "MH",
      country: "India",
    },
  ]

  constructor(private http:HttpClient) { }

  addSupplier(addSuppliers: any) {
    this.suppliers_list.push(addSuppliers.value)
    // console.log(this.suppliers_list.value)
  }
  onGet(){
     return this.suppliers_list
  }
  getDetailsById(id: number) {
    return this.suppliers_list.find(x => x.supplier_id ===id);
  }

//CORS Issue

  // onGet():Observable<supplier[]>{
  //   return this.http.get<supplier[]>('https://localhost:44310/api/Users/GetUsers');
  // }

  //  onGet():Observable<supplier[]>{
  //   return this.http.get<supplier[]>('https://jsonplaceholder.typicode.com/posts');
  // }

  getById(id:number):Observable<supplier[]>{
    return this.http.get<supplier[]>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
  
  delete(id:number):Observable<any[]>{
    return this.http.delete<any[]>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
 
}
