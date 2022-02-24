import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = 'http://localhost:3001/products';
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }
}
