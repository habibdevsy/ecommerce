import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BrandSliderComponent } from './brand-slider.component';
import { Brand } from 'src/app/models/brand.model';
import { BrandCardModule } from '../brand-card/brand-card.module';

@NgModule({
  declarations: [BrandSliderComponent],
  imports: [ CommonModule, IonicModule, BrandCardModule],
  exports: [BrandSliderComponent],
})
export class BrandSliderModule {
  @Input() brands: Brand;
}
