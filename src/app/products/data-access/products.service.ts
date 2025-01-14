import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BaseHttpService } from "../../shared/data-access/base-http.service";
import { Product } from "../../shared/interfaces/product.interface";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class ProductsService extends BaseHttpService {
  getProducts(): Observable<Product[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products`)
  }
}