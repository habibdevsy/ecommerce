import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductViewPageRoutingModule } from './product-view-routing.module';

import { ProductViewPage } from './product-view.page';

import { ProductViewSliderModule } from 'src/app/components/product-view-slider/product-view-slider.module';

import { ProductsComponentModule } from 'src/app/components/products/products.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductViewPageRoutingModule,
    ProductViewSliderModule,
    ProductsComponentModule
  ],
  declarations: [ProductViewPage]
})
export class ProductViewPageModule {}
