import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Process} from 'src/app/models/process-model';
import {Observable, from} from 'rxjs';

import {Subject} from 'rxjs';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  constructor(private http:HttpClient) { }

  formData: Process;

  readonly APIUrl = "http://localhost:8080";

  getProcList():Observable<Process[]>{
    return this.http.get<Process[]>(this.APIUrl + '/users/product/process');
  }

  addProcess(proc:Process){
    return this.http.post(this.APIUrl+'/users/product/process',proc)
  }

  deleteProcess(id:number){
    return this.http.delete(this.APIUrl+'/users/product/process/'+id);
  }

  updateProcess(proc:Process){
    return this.http.post(this.APIUrl+'/users/product/process',proc)
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
