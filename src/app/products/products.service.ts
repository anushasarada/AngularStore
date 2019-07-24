import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import iReview from './review';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient ) {
  }
  //get- retrieve info
  //post- to send info to backend
  //put- to updte info
  //delete- del info
  getProducts() {
     //the returned object is an "observable"
     return this.http.get('http://awesome-store-server.herokuapp.com/products');
  }
  getProduct(id) {
    //the returned object is an "observable"
    return this.http.get(`http://awesome-store-server.herokuapp.com/products/${id}`);
 }
  addReview(id:number|string, review:iReview){
    return this.http.post(
      `http://awesome-store-server.herokuapp.com/products/${id}/reviews`,
      review,
      {
        headers: new HttpHeaders({
        'Content-Type':'application/json'
        })
      }
    )
  }
}
