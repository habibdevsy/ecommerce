import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.page.html',
  styleUrls: ['./products-view.page.scss'],
})
export class ProductsViewPage implements OnInit {

  url: string;
  itemListData = [];
  page_number = 1;
  page_limit = 8;
  brandId:any;
  products:Product[];
  constructor(private route:ActivatedRoute, public productService:ProductService, private loadingCtrl:LoadingController) {
  }

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params["type"] == "1") {
        this.products = params["products"];
      }
      if (params["type"] == "3") {
        this.productsByBrand(params["id"],false, "");
        this.brandId = params["id"];
      }
      if (params["type"] == "4") {
        this.productsByCategory(params['id']);
      }
   })
  }

  async productsByCategory( $categoryId:number){
    const loading = await this.loadingCtrl.create({message:'loading..'});
    loading.present();
    let items = this.productService.getProductsByCategory($categoryId);
    items.forEach(element => {
      loading.dismiss();
      console.log( element['data']);
      this.products = element['data'];
      this.products.splice(1,2);
      console.log( this.products);

    });

  }

  async productsByBrand( $brandId:number,isFirstLoad, event){
    console.log($brandId);
    const loading = await this.loadingCtrl.create({message:'loading..'});
    loading.present();
    this.url = '?page=' + this.page_number;
    let items =this.productService.getProductsByBrand($brandId, this.url).
forEach(element => {
        loading.dismiss();
        this.products = element['data']['data'];
        if (element['data']['data'].length == 0) {
          console.log("not found, go to page 404")
        }
      // });
      if (isFirstLoad)
        event.target.complete();

      this.page_number++;
    });


  }
  // doInfinite(event: any) {
  //   console.log("doInfinite");
  //   this.productsByBrand( this.brandId,true, event);
  // }
  // doRefresh(event) {
  //   console.log('Begin async operation');
  //   this. ngOnInit();
  //   setTimeout(() => {
  //     console.log('Async operation has ended');
  //     event.target.complete();
  //   }, 1000);}
}
