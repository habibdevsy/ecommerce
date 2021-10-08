import { Component, Input } from '@angular/core';
import { ProductDetailImages } from 'src/app/models/ProductDetailImages.model';
@Component({
  selector: 'app-product-view-slider',
  templateUrl: './product-view-slider.component.html',
  styleUrls: ['./product-view-slider.component.scss'],
})
export class ProductViewSliderComponent {

  constructor() { }

  @Input() images: ProductDetailImages[];

}
