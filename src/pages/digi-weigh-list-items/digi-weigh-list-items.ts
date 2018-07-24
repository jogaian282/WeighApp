import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController  } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/**
 * Generated class for the DigiWeighListItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-digi-weigh-list-items',
  templateUrl: 'digi-weigh-list-items.html',
})
export class DigiWeighListItemsPage {

  public digiWeighList: any[] = [];

  constructor(public navCtrl: NavController, private sqlite: SQLite,
              public platform: Platform,
              public alertCtrl: AlertController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.getDigiWeighTableData();
    });
  }

  getDigiWeighTableData() {
    this.sqlite.create({
      name: 'digiWeighDb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {

      // Create Table.
      db.executeSql('CREATE TABLE IF NOT EXISTS digiWeigh(id INTEGER PRIMARY KEY AUTOINCREMENT, billNo VARCHAR(50),vehicleNo VARCHAR(50),mobileNo VARCHAR(20),vehicleType TEXT,vehicleInOut TEXT,charges INTEGER,grossWeight INTEGER,netWeight INTEGER,customerName VARCHAR(75),itemName TEXT,quantity INTEGER,invChalanNo VARCHAR(50),paymentOptions TEXT,remarks VARCHAR(100),tareWeight INTEGER,date TEXT,field1 VARCHAR(50),field2 VARCHAR(50),field3 VARCHAR(50))', {})
      .then(res => console.log('Executed SQL'))
      .catch(e => console.log(e));

      // Get Records.
      db.executeSql('SELECT * FROM digiWeigh', {})
      .then(data => {
        this.digiWeighList = [];
        for(var k = 0; k < data.rows.length; k++) {
          this.digiWeighList.push({
            id: data.rows.item(k).id,
            billNo: data.rows.item(k).billNo,
            vehicleNo: data.rows.item(k).vehicleNo,
            mobileNo: data.rows.item(k).mobileNo,
            vehicleType: data.rows.item(k).vehicleType,
            vehicleInOut: data.rows.item(k).vehicleInOut,
            charges: data.rows.item(k).charges,
            grossWeight: data.rows.item(k).grossWeight,
            netWeight: data.rows.item(k).netWeight,
            customerName: data.rows.item(k).customerName,
            itemName: data.rows.item(k).itemName,
            quantity: data.rows.item(k).quantity,
            invChalanNo: data.rows.item(k).invChalanNo,
            paymentOptions: data.rows.item(k).paymentOptions,
            remarks: data.rows.item(k).remarks,
            tareWeight: data.rows.item(k).tareWeight,
            date: data.rows.item(k).date,
            field1: data.rows.item(k).field1,
            field2: data.rows.item(k).field2,
            field3: data.rows.item(k).field3
          })
        }
      }).catch(e => { 
        console.log(e)
      });
      
    }).catch(e => {
      console.log(e)
    });
  }

  // Delete Records.
  deleteSelectedRecord(selectedId) {
    let alertPopup = this.alertCtrl.create({
      title: 'Delete Digi Weigh Record',
      message: 'Are you sure you want to delete the selected record?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            this.sqlite.create({
              name: 'digiWeighDb.db',
              location: 'default'
            }).then((db: SQLiteObject) => {

              let sql_query = "DELETE FROM digiWeigh WHERE id =?";
              db.executeSql(sql_query, [selectedId])
              .then(res => {
                this.getDigiWeighTableData();
              }).catch(e => {
                console.log(e)
              });

            }).catch(e => {
              console.log(e)
            });
          }
        }
      ]
    });
    alertPopup.present();
  }

}
