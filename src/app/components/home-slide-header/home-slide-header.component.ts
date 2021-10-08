import { Component, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Product } from 'src/app/models/product.model';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-home-slide-header',
  templateUrl: './home-slide-header.component.html',
  styleUrls: ['./home-slide-header.component.scss'],
})
export class HomeSlideHeaderComponent {

  @Input() title: string;
  @Input() categoryTitle: string;
  // @Input() categoryId: string;
  @Input() type: string;
  @Input() products: Product[];
  @Input() categories:Category[];

  constructor( public navController:NavController) {
  }

  goToProducts($products) {
    console.log("ok",$products);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        products: $products,
        type:this.type
      }
  };
  this.navController.navigateForward('/products-view',navigationExtras);
  }

  goToProducts2($categories) {
    console.log("goToProducts2",$categories);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        categories: $categories,
        type:this.type
      }
  };
  this.navController.navigateForward('/products-view',navigationExtras);
  }
}
