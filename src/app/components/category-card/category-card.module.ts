import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCardComponent } from './category-card.component';
import { IonicModule } from '@ionic/angular';
import { Product } from 'src/app/models/product.model';

@NgModule({
  declarations: [CategoryCardComponent],
  imports: [ CommonModule, IonicModule ],
  exports: [CategoryCardComponent],
})
export class CategoryCardModule {
  @Input() category: Product;
}
