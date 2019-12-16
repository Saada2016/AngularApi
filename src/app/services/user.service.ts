import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from 'src/app/models/user-model';
import {Observable, from} from 'rxjs';

import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  formData: User;

  readonly APIUrl = "http://localhost:8080";

  getUsrList():Observable<User[]>{
    return this.http.get<User[]>(this.APIUrl + '/users');
  }

  addUser(usr:User){
    return this.http.post(this.APIUrl+'/users',usr)
  }

  deleteUser(id:number){
    return this.http.delete(this.APIUrl+'/users/'+id);
  }

  updateUser(usr:User){
    return this.http.post(this.APIUrl+'/users',usr)
  }

  private _listeners = new Subject<any>();
  listen():Observable<any>{
    return this._listeners.asObservable();
  }
  filter(filterBy: string){
    this._listeners.next(filterBy);
  }

}
