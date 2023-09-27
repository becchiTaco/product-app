import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductDescriptionComponent } from "./product-description/product-description.component";

@Injectable({
    providedIn: 'root',
})

export class ApiService{
    private baseURL = 'https://fakestoreapi.com/products';
    constructor(private http: HttpClient){}

    getProducts(): Observable<any>{
        return this.http.get(this.baseURL);
    }
    getProduct(id:number): Observable<any>{
        return this.http.get(`${this.baseURL}/${id}`);
    }
    createProduct(product: any): Observable<any>{
        return this.http.post(this.baseURL, product);
    }
    updateProduct(id: number, product:any): Observable<any>{
        return this.http.put(`${this.baseURL}/${id}`, product);
    }
    deleteProduct(id:number){
        return this.http.delete(`${this.baseURL}/${id}`);
    }
}