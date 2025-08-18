import { ProductsService } from '@products/services/products.service';
import { SlicePipe } from '@angular/common';
import { Component, input, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '@products/interfaces/product.interface';
import { ProductImagePipe } from '@products/pipes/product-image.pipe';

@Component({
  selector: 'product-card',
  imports: [RouterLink, SlicePipe, ProductImagePipe],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  productsService = inject(ProductsService);

  product = input.required<Product>();
}
