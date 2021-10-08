import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { IonicModule } from '@ionic/angular';
import { Product } from 'src/app/models/product.model';
import { ProductCardModule } from '../product-card/product-card.module';

@NgModule({
  declarations: [ProductsComponent],
  imports: [ CommonModule, IonicModule, ProductCardModule],
  exports: [ProductsComponent],
})
export class ProductsComponentModule {
  @Input() products: Product;
}
