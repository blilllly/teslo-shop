import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl;

@Pipe({
  name: 'productImage',
})
export class ProductImagePipe implements PipeTransform {
  transform(value: string | string[]): string {
    // string = string
    if (typeof value === 'string') return `${baseUrl}/files/product/${value}`;
    // placeholder image
    if (!value) return './assets/images/no-image.jpg';
    // array > 1 = primer elemento
    return `${baseUrl}/files/product/${value[0]}`;
  }
}
