import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postProductAPI(data:any){
    return this.http.post<any>("http://localhost:3000/productList/",data)
  }

  getProductAPI(){
    return this.http.get<any>("http://localhost:3000/productList/")
  }

  putProductAPI(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/productList/"+id,data)
  }

  deleteProductAPI(id:number){
    return this.http.delete<any>("http://localhost:3000/productList/"+id)
  }
}
