import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSlideHeaderComponent } from './home-slide-header.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [HomeSlideHeaderComponent],
  imports: [ CommonModule, IonicModule ],
  exports: [HomeSlideHeaderComponent],
})
export class HomeSlideHeaderModule {}
