import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { ProductsService, } from './products.service';
import { signalSlice, Source } from 'ngxtension/signal-slice';
import { map } from 'rxjs/operators';
import { Product } from '../../shared/interfaces/product.interface';

interface State {
  products: Product[];
  status: 'loading' | 'success' | 'error';
}

@Injectable()
export class ProductsStateService {

  private productsService = inject(ProductsService);
  private initialState: State = {
    products: [],
    status: 'loading'
  };

  state = signalSlice({
    initialState: this.initialState,
    sources: [
      this.productsService.getProducts().pipe(
        map((products) => ({ products, status: 'success' as const }))
      ) 
    ]
  });
}