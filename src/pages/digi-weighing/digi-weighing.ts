import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the DigiWeighingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'digi-weighing',
  templateUrl: 'digi-weighing.html',
})
export class DigiWeighingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
  }

  navigateToDigiWeighingForms() {
    this.navCtrl.push('DigiWeighingFormsPage')
  }

  openSecondWeighAlert() {
    let alert = this.alertCtrl.create();
    alert.setTitle(`<h6 class="titleAlert">Choose Second Weighment Option</h6>`);
    alert.addInput({
      type: 'radio',
      label: 'VEHICLE NO',
      value: 'vehicleNo',
      handler: (data) => {
        let alert = this.alertCtrl.create({
          inputs: [
            {
              name: 'vehicleNo',
              type: 'text'
            }
          ],
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: data => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'OK',
              handler: data => {
                console.log(data);
              }
            }
          ]
        });
        alert.setTitle('Enter Vehicle No.');
        alert.present();
      }
    });
    alert.addInput({
      type: 'radio',
      label: 'BILL/TICKET NO',
      value: 'billNo',
      handler: (data) => {
        let alert = this.alertCtrl.create({
          inputs: [
            {
              name: 'billNo',
              type: 'number'
            }
          ],
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: data => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'OK',
              handler: data => {
                console.log(data);
              }
            }
          ]
        });
        if (data.value == 'vehicleNo') {
          alert.setTitle('Enter Vehicle No.');
        } else {
          alert.setTitle('Enter Bill No.');
        }
        alert.present();
      }
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK'
    });
    alert.present();
  }

  openThirdWeighAlert() {
    let alert = this.alertCtrl.create();
    alert.setTitle(`<h6 class="titleAlert">Choose Third Weighment Option</h6>`);
    alert.addInput({
      type: 'text',
      label: 'VEHICLE NO'
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK'
    });
    alert.present();
  }

  openFourthWeighAlert() {
    let alert = this.alertCtrl.create();
    alert.setTitle(`<h6 class="titleAlert">Choose Fourth Weighment Option</h6>`);
    alert.addInput({
      type: 'text',
      label: 'Bill NO'
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK'
    });
    alert.present();
  }
}

