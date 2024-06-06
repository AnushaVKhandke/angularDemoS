import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { app } from './app';

@Injectable({
  providedIn: 'root'
})
export class ProdService {

  constructor(private http:HttpClient) { }

  getProduct():Observable<app[]>{
    return this.http.get<app[]>('assets/product.json');
  }
}
