import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'favoriteTab',
    loadChildren: () => import('./pages/favoriteTab/favoriteTab.module').then( m => m.FavoritePageModule)
  },
  {
    path: 'product-view/:id',
    loadChildren: () => import('./pages/product-view/product-view.module').then( m => m.ProductViewPageModule)
  },
  {
    path: 'products-view',
    loadChildren: () => import('./pages/products-view/products-view.module').then( m => m.ProductsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
