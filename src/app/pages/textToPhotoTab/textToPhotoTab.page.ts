import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'textToPhotoTab.page.html',
  styleUrls: ['textToPhotoTab.page.scss']
})
export class TextToPhotoTab {

  constructor(private navController: NavController, private router: Router, ) {}
  ngOnInit() {
  }

  openDetails() {
    // Both of these would work!
    // But the standard Router is recommended.
    this.navController.navigateForward('/favoriteTab');
    // this.router.navigateByUrl('/test');
  }

  goToPlanets() {
    // this.navController.navigateRoot('/test');
    this.navController.navigateForward('/favoriteTab');
  }
  go(name) {
    console.log(name);
    let navigationExtras: NavigationExtras = {
      queryParams: {
          currency: name
          // currency: JSON.stringify(name)
      }
  };
  this.navController.navigateForward(['/favoriteTab'], navigationExtras);
    // this.router.navigate(['/test']);

  }
}
