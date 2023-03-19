import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  url:string = "https://api.escuelajs.co/api/v1/";

  constructor(private httpcliente:HttpClient) { }

  getProducts(){
    return this.httpcliente.get(`${this.url}products`);
  }

}
