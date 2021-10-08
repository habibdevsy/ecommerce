import { Component, Input, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand.model';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-brand-card',
  templateUrl: './brand-card.component.html',
  styleUrls: ['./brand-card.component.scss'],
})

export class BrandCardComponent implements OnInit {

  @Input() brand:Brand;
  @Input() type:string;
  constructor(public navController:NavController) { }

  ngOnInit() {}
  view($id: number) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          id: $id,
          type:this.type
      }
  };
  this.navController.navigateForward(['products-view'], navigationExtras);
  }
}
