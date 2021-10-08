import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})

export class CategoryCardComponent implements OnInit {

  @Input() categories:Category[];
  @Input() type:string;

  constructor(public navController:NavController) { }

  ngOnInit() {
    console.log(this.categories);
  }
  view($id: number, $name: string) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          id: $id,
          name: $name,
          type: this.type,
      }
  };

  this.navController.navigateForward(['products-view'], navigationExtras);
  }
}
