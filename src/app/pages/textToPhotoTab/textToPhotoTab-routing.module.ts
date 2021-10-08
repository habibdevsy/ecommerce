import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextToPhotoTab } from './textToPhotoTab.page';

const routes: Routes = [
  {
    path: '',
    component: TextToPhotoTab,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
