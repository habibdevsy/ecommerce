import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductViewSliderComponent } from './product-view-slider.component';
import { IonicModule } from '@ionic/angular';
import { Product } from 'src/app/models/product.model';

@NgModule({
  declarations: [ProductViewSliderComponent],
  imports: [ CommonModule, IonicModule],
  exports: [ProductViewSliderComponent],
})
export class ProductViewSliderModule {
  @Input() product: Product;
}
