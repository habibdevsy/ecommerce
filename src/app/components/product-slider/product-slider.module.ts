import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProductSliderComponent } from './product-slider.component';
import { Product } from 'src/app/models/product.model';
import { ProductCardModule } from '../product-card/product-card.module';

@NgModule({
  declarations: [ProductSliderComponent],
  imports: [ CommonModule, IonicModule, ProductCardModule],
  exports: [ProductSliderComponent],
})
export class ProductSliderModule {
  @Input() products: Product;
}
