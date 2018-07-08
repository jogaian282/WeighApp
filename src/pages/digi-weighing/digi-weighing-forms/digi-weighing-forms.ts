import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DigiWeigh } from '../../../models/digi-weigh';
import { OfflineWebProvider } from '../../../providers/offline-web/offline-web';

/**
 * Generated class for the DigiWeighingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'digi-weighing-forms',
  templateUrl: 'digi-weighing-forms.html',
})
export class DigiWeighingFormsPage {

  public items: any[] = [];
  public itemcount = 0;
  public digiWeigh: DigiWeigh = new DigiWeigh();

  constructor(public navCtrl: NavController, public navParams: NavParams, public webOffline: OfflineWebProvider) {
  }

  ionViewDidLoad() {
    this.getTableData();
  }

  getTableData() {
    this.webOffline.getData().then(data => {
      console.log(data);
    });
  }

}