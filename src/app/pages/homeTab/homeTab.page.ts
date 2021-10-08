import { Component } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { Brand } from 'src/app/models/brand.model';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { BarndService } from '../../services/barnd.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'homeTab.page.html',
  styleUrls: ['homeTab.page.scss']
})

export class HomeTabPage {

  categories:Category[];
  brands:Brand[];
  products:Product[];
  featuredProducts:Product[];
  productsByBest:Product[];
  productsOfCategory:Product[];
  brandsWithProducts:Brand[];
  categoryWithProducts:Product[];

  slideOptions = {
    initialSlide: 2,
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 0
  };

  constructor( private productService:ProductService, private categoryService:CategoryService, private loadingCtrl:LoadingController, private barndService:BarndService) {
  }
  ionViewDidEnter() {
    this.getCategories();
    this.getBrands();
    this.getProductsByBest();
    this.getCategoriesWithProducts();
  }

  async  getCategories(){
    const loading = await this.loadingCtrl.create(
      {
        message:'loading..',
        cssClass:'ion-loading-class'
      });
    loading.present();
    let items = this.categoryService.getCategories();
    console.log( items);
    items.forEach(element => {
      loading.dismiss();
      console.log( element['data']);
      this.categories = element['data'];
      console.log(   this.categories );
    });
  }

  async  getBrands(){
    const loading = await this.loadingCtrl.create(
      {
        message:'loading..',
        cssClass:'ion-loading-class'
      });
    loading.present();
    let items = this.barndService.getBrands();
    console.log( items);
    items.forEach(element => {
      loading.dismiss();
      this.brands = element['data'];
    });
  }

  async  getCategoriesWithProducts(){
    const loading = await this.loadingCtrl.create(
      {
        message:'loading..',
        cssClass:'ion-loading-class'
      });
    loading.present();
    let items = this.categoryService.getCategories();
    console.log( items);
    items.forEach(element => {
        loading.dismiss();
        this.categoryWithProducts = element['data'];
    });
  }

  async  getProductsByCategory($id:number){
    console.log($id);
    const loading = await this.loadingCtrl.create(
      {
        message:'loading..',
        cssClass:'ion-loading-class'
      });
    loading.present();
    let items = this.productService.getProductsByCategory($id);
    console.log( items);
    items.forEach(element => {
        loading.dismiss();
        this.productsOfCategory = element['data'];
    });
  }

  async  getProductsByBest(){
    const loading = await this.loadingCtrl.create(
      {
        message:'loading..',
        cssClass:'ion-loading-class'
      });
    loading.present();
    this.productService.getProductsByBest()
      .subscribe((element) => {
          loading.dismiss();
          this.productsByBest = element['data'];
    });
  }

//   post(){
//     let postData = {
//       "userID": "Customer00004",
//       "password": "12345",
//       "userName": "0000252525"
// }

// this.http.post("http://127.0.0.1:8000/captainRegister", postData)
//       .subscribe(data => {
//         if( data['status_code'] == "425"){
//           console.log(data['Data'].found);
//         }
//         if( data['status_code'] == "201"){
//           console.log(data['msg']);
//         }

//        }, error => {
//         console.log(error);
//       });
//   }
}
