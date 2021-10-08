import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ProductDetailImages } from 'src/app/models/ProductDetailImages.model';
import { Product } from 'src/app/models/product.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.page.html',
  styleUrls: ['./product-view.page.scss'],
})
export class ProductViewPage implements OnInit {
  id: number
  name: string
  price: number
  categoryId: number
  brandId: number
  imageUrl: string
  images:ProductDetailImages[];

  products:Product[];
  productsByBrand:Product[];

  segment:string="related";
  spinnerShow:string = "spinner-show";

  constructor(private route:ActivatedRoute, public productService:ProductService, public navController:NavController) {

   }
   ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.id = params["id"];
      this.name = params["name"];
      this.price = params["price"];
      this.categoryId = params["categoryId"];
      this.brandId = params["brandId"];
      this.imageUrl = params["imageUrl"];

      this.productDetailImages(this.id);
      console.log(this.categoryId );
      console.log(this.brandId);
     });
    this.segmentChanged("related");
   }

   async segmentChanged($ev){
    console.log(this.segment);

     if (this.segment == "related") {
        console.log(this.categoryId);
        let items = await this.productService.getProductsByCategory(this.categoryId);
        console.log( items);
        items.forEach(element => {
            this.spinnerShow = "spinner-hide";
            this.products = element['data'];
        });
     }

     if (this.segment == "fromCompany") {
      console.log(this.brandId);
      let items = await this.productService.getProductsByBrand(this.brandId,false)
      console.log( items);
      items.forEach(element => {
          this.spinnerShow = "spinner-hide";
          this.productsByBrand = element['data'];
      });
     }
   }

  productDetailImages( $id:number){
    this.images = this.productService.getProductDetailImages($id);
  }
}
