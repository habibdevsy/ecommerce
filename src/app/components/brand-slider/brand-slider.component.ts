import { Component, Input } from '@angular/core';
import { Brand } from 'src/app/models/brand.model';
@Component({
  selector: 'app-brand-slider',
  templateUrl: './brand-slider.component.html',
  styleUrls: ['./brand-slider.component.scss'],
})
export class BrandSliderComponent  {

  @Input() brands: Brand[];
  @Input() type: string;
  constructor() {
    console.log(this.brands);
    console.log(this.type);
  }
 brandsSlideOpts = {
   initialSlide: 0,
   spaceBetween: 0,
   slidesPerView: 3,
   slidesOffsetBeFore: 0,
 };

}
