import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeTabPage } from './homeTab.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './homeTab-routing.module';
import { HomeSlideHeaderModule } from 'src/app/components/home-slide-header/home-slide-header.module';
import { CategoryCardModule } from 'src/app/components/category-card/category-card.module';
import { ProductSliderModule } from 'src/app/components/product-slider/product-slider.module';
import { BrandSliderModule } from 'src/app/components/brand-slider/brand-slider.module';
import { BrandCardModule } from 'src/app/components/brand-card/brand-card.module';
import { CategorySliderModule } from 'src/app/components/category-slider/category-slider.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    HomeSlideHeaderModule,
    CategoryCardModule,
    BrandCardModule,
    BrandSliderModule,
    CategorySliderModule,
    ProductSliderModule
  ],
  declarations: [HomeTabPage]
})
export class HomePageModule {}
