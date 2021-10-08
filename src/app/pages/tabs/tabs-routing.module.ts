import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../homeTab/homeTab.module').then(m => m.HomePageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../textToPhotoTab/textToPhotoTab.module').then(m => m.TextToPhotoTabPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../creativityTab/creativityTab.module').then(m => m.CreativityPageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../favoriteTab/favoriteTab.module').then(m => m.FavoritePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
