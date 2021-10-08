import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { catchError, tap } from 'rxjs/operators';

import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {

  @Input() products: Product[];

  url: string;
  itemListData = [];
  page_number = 1;
  page_limit = 8;
  brandId:any;
  // products$:Product[];
  constructor(private route:ActivatedRoute, public productService:ProductService, private loadingCtrl:LoadingController) {
  }
  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params["type"] == "1") {
        this.products = params["products"];
      }
      // if (params["type"] == "3") {
        this.productsByBrand(params["id"],false, "");
        this.brandId = params["id"];
      // }
      // if (params["type"] == "4") {
      //   this.productsByCategory(params['id']);
      // }
   })
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
  doInfinite(event: any) {
    console.log("doInfinite");
    this.productsByBrand( this.brandId,true, event);
  }
  doRefresh(event) {
    console.log('Begin async operation');
    this. ngOnInit();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);}

}
