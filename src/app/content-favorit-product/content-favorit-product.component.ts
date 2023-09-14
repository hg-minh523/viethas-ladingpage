import { Component, Input } from '@angular/core';
import { product } from '../content-main/content-main.component';

@Component({
  selector: 'app-content-favorit-product',
  templateUrl: './content-favorit-product.component.html',
  styleUrls: ['./content-favorit-product.component.css']
})
export class ContentFavoritProductComponent {
  @Input() productList: product[] = [];
  @Input() productListTittle: String = '';
}
