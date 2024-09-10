import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { catchError, map, Observable } from 'rxjs';

const baseUrl = 'http://localhost:5289/api/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpclient: HttpClient) { }
  getAll(): Observable<Product> {
    //this.httpclient.get(`${baseUrl}/getproductlist`)
    return this.httpclient.get<Product>(`${baseUrl}/getproductlist`);
  }
  get(id: any): Observable<any> {
    return this.httpclient.get<any>(`${baseUrl}/getproductbyid?${id}`);
  }


  AddProduct(data: any): Observable<any> {
    debugger
    console.log(data);
    return this.httpclient.post<any>(`${baseUrl}/addproduct`, data)
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((err) => {
          console.log(err);
          throw err;
        })
      );
  }

  DeleteProduct(data: any): Observable<any> {
    debugger
    return this.httpclient.delete<any>(`${baseUrl}/deleteproduct?Id=${data}`)
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((err) => {
          console.log(err);
          throw err;
        })
      );
  }

}

