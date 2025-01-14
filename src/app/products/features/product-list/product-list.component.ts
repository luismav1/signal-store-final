import { Component, inject } from '@angular/core';
import { ProductsStateService } from '../../data-access/product-state.service';
import { ProductsService } from '../../data-access/products.service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers: [ProductsStateService, ProductsService]
})
export default class ProductListComponent {
  productsState = inject(ProductsStateService);
}
