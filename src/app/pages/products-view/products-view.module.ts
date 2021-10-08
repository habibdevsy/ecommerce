import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsPageRoutingModule } from './products-routing.module';

import { ProductsViewPage } from './products-view.page';

import { ProductsComponentModule } from 'src/app/components/products/products.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsPageRoutingModule,
    ProductsComponentModule
  ],
  declarations: [ProductsViewPage]
})
export class ProductsPageModule {}
