import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigateToDigiWeighingPage() {
    this.navCtrl.push('DigiWeighingPage');
  }

  navigateToReportsPage() {
    this.navCtrl.push('ReportsPage');
  }

}
