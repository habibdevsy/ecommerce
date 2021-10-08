import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CategorySliderComponent } from './category-slider.component';
import { Category } from 'src/app/models/category.model';
import { CategoryCardModule } from '../category-card/category-card.module';

@NgModule({
  declarations: [CategorySliderComponent],
  imports: [ CommonModule, IonicModule, CategoryCardModule],
  exports: [CategorySliderComponent],
})
export class CategorySliderModule {
  @Input() categories: Category;
}
