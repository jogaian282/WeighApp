import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { DigiWeigh } from '../../../models/digi-weigh';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

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

  public digiWeighList: any[] = [];
  public digiWeigh: DigiWeigh = new DigiWeigh();
  @ViewChild('digiWeighRef') digiWeighForm;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private sqlite: SQLite,
              private toast: Toast,
              public alertCtrl: AlertController,
              public platform: Platform) {
  }

  ionViewDidLoad() : void {
    this.platform.ready().then(() => {
      this.createTable();
    });
  }

  /**
   * @description - Method to get table data.
   */
  createTable() {
    this.sqlite.create({
      name: 'digiWeighDb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS digiWeigh(id INTEGER PRIMARY KEY AUTOINCREMENT, billNo VARCHAR(50),vehicleNo VARCHAR(50),mobileNo VARCHAR(20),vehicleType TEXT,vehicleInOut TEXT,charges INTEGER,grossWeight INTEGER,netWeight INTEGER,customerName VARCHAR(75),itemName TEXT,quantity INTEGER,invChalanNo VARCHAR(50),paymentOptions TEXT,remarks VARCHAR(100),tareWeight INTEGER,date TEXT,field1 VARCHAR(50),field2 VARCHAR(50),field3 VARCHAR(50))', {})
      .then(res => console.log('Executed SQL'))
      .catch(e => console.log(e));
    }).catch(e => console.log(e));
  }
  
  /**
   * @description - Method to save form data.
   */
  public addRecord() {
    this.sqlite.create({
      name: 'digiWeighDb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO digiWeigh VALUES(NULL,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
      [
        this.digiWeigh['billNo'],
        this.digiWeigh['vehicleNo'],
        this.digiWeigh['mobileNo'],
        this.digiWeigh['vehicleType'],
        this.digiWeigh['vehicleInOut'],
        this.digiWeigh['charges'],
        this.digiWeigh['grossWeight'],
        this.digiWeigh['netWeight'],
        this.digiWeigh['customerName'],
        this.digiWeigh['itemName'],
        this.digiWeigh['quantity'],
        this.digiWeigh['invChalanNo'],
        this.digiWeigh['paymentOptions'],
        this.digiWeigh['remarks'],
        this.digiWeigh['tareWeight'],
        this.digiWeigh['date'],
        this.digiWeigh['field1'],
        this.digiWeigh['field2'],
        this.digiWeigh['field3']
      ])
      .then(res => {
        console.log(res);
        this.toast.show('Data saved', '5000', 'center').subscribe(
          toast => {
            // this.navCtrl.push('DigiWeighingPage');
            this.resetRecord();
          }
        );
      }).catch(e => {
        console.log(e);
        this.toast.show(e, '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );
      });
    }).catch(e => {
      console.log(e);
      this.toast.show(e, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  }

  // Reset Form.
  private resetDigiWeighForm() {
    this.digiWeighForm.resetForm();
  }

  // Reset Record.
  public resetRecord() {
    this.digiWeigh = new DigiWeigh();
    this.resetDigiWeighForm();
  }
}