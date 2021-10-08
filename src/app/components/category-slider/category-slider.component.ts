import { Component, Input } from '@angular/core';
import { Category } from 'src/app/models/category.model';
@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.scss'],
})
export class CategorySliderComponent  {

  @Input() categories: Category[];
  @Input() type: string;
  @Input() categoryId: number;
  constructor() {
  }

 optionsSlideOpts = {
   initialSlide: 0,
   spaceBetween: 0,
   slidesPerView: 3,
   slidesOffsetBeFore: 0
 };
}
