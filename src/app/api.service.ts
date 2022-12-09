import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addUser=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8081/add",dataToSend)
  }
  getProfileDetails=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8081/view",dataToSend)
  }
  addLogin=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8081/login",dataToSend)
  }
}