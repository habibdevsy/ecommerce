import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandCardComponent } from './brand-card.component';
import { IonicModule } from '@ionic/angular';
import { Product } from 'src/app/models/product.model';

@NgModule({
  declarations: [BrandCardComponent],
  imports: [ CommonModule, IonicModule ],
  exports: [BrandCardComponent],
})
export class BrandCardModule {
  @Input() brand: Product;
}
