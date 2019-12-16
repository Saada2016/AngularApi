import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from 'src/app/models/product-model';
import {Observable, from} from 'rxjs';

import {Subject} from 'rxjs';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  formData: Product;

  readonly APIUrl = "http://localhost:8080";

  getProList():Observable<Product[]>{
    return this.http.get<Product[]>(this.APIUrl + '/users/products');
  }

  addProduct(pro:Product){
    return this.http.post(this.APIUrl+'/users/products',pro)
  }

  deleteProduct(id:number){
    return this.http.delete(this.APIUrl+'/users/products/'+id);
  }

  updateProduct(pro:Product){
    return this.http.post(this.APIUrl+'/users/products',pro)
  }

  getUsrDropDownValues():Observable<any>{
    return this.http.get<User[]>(this.APIUrl+'/users');
  }

  private _listeners = new Subject<any>();
  listen():Observable<any>{
    return this._listeners.asObservable();
  }
  filter(filterBy: string){
    this._listeners.next(filterBy);
  }

}
