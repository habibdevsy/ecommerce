import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreativityTabPage } from './creativityTab.page';

const routes: Routes = [
  {
    path: '',
    component: CreativityTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
