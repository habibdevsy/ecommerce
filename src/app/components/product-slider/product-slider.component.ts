import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss'],
})
export class ProductSliderComponent{

  @Input() products: Product[];
  @Input() categoryId: string;

  constructor(private productService:ProductService) {
  }
  ngOnInit() {
    if(this.categoryId) {
      this.getProductsByCategory(this.categoryId);
      console.log(this.products,'ok');
    }
  }

  productsSlideOpts = {
    initialSlide: 0,
    spaceBetween: 0,
    slidesPerView: 2.2,
    slidesOffsetBeFore: 0
  };

  async  getProductsByCategory($id){
    let items = this.productService.getProductsByCategory($id);
    console.log( items);
    items.forEach(element => {
        this.products = element['data'];
    });
  }
  moreData(newData: any){
  //   this.offset++;
  // this.api.post('search/data/'+this.offset,data).toPromise().then((res)=>{
  //     if (res['status'] == 200) {
  //       res['oldData'].forEach(newData => {
  //         this.data.push(newData);
  //         });

  //     }})
  console.log("555555555555555555");

  }
}
