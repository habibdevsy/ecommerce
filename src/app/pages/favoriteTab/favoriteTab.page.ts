import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favoriteTab',
  templateUrl: './favoriteTab.page.html',
  styleUrls: ['./favoriteTab.page.scss'],
})
export class FavoriteTabPage implements OnInit {
  item: any
  item2: any
  name: any
  constructor(private navController: NavController, private router: Router, private route:ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
        this.item = params["id"];
        // this.item = JSON.parse(params["currency"]);

    console.log(this.item2);
    console.log(this.name);
    });
  }

  ngOnInit() {
  }
  goToPlanets() {
    // this.navController.navigateRoot('/test');
    // this.navController.back();
    this.navController.pop();
    console.log(this.item);
  }
}
