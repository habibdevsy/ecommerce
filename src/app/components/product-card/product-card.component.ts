import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {

  @Input() product: Product;

  constructor( public navController:NavController) {
  }
  go($id){
  console.log($id);
  }
ngOnInit() {
  console.log(this.product);
}
  view($id: number, $name: string, $price: number, $imageUrl: string, $categoryId:number, $brandId:number) {
    console.log($brandId);
    let navigationExtras: NavigationExtras = {
      queryParams: {
          id: $id,
          price: $price,
          imageUrl: $imageUrl,
          name: $name,
          categoryId: $categoryId,
          brandId: $brandId,
      }
  };
  this.navController.navigateForward(['product-view/id'+$id], navigationExtras);
  }

}
