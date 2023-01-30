import { Injectable } from '@angular/core';

import { ProductModel } from '../models/product/product.model';

@Injectable({
  providedIn: 'root',
})
export class SysService {
  constructor() {}

  insertDataOnLocalStorage(data: Array<ProductModel>): void {
    localStorage.setItem('cart', JSON.stringify(data));
  }

  getDataToLocalStorage(): Array<ProductModel> {
    const result = localStorage.getItem('cart');
    return JSON.parse(result || '[]');
  }

  cleanLocalStorage(): void {
    localStorage.setItem('cart', JSON.stringify([]));
  }
}
