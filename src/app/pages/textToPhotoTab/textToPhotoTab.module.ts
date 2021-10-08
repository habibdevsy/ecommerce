import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextToPhotoTab } from './textToPhotoTab.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './textToPhotoTab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [TextToPhotoTab]
})
export class TextToPhotoTabPageModule {}
