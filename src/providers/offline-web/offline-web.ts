import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the OfflineWebProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OfflineWebProvider {

  public digiWeighItemsList: any[] = [];

  constructor(public http: HttpClient, public sqlite: SQLite) {
  }

  // To create database.
  public createDatabase() {
    return this.sqlite.create({name: 'weighdb.db', location: 'default'});
  }

  // To create table.
  public createDigiWeighTable() {
    let query = "CREATE TABLE IF NOT EXISTS DigiWeigh (id INTEGER PRIMARY KEY AUTOINCREMENT, billNo VARCHAR(50),vehicleNo VARCHAR(50),MobileNo VARCHAR(20),vehicleType TEXT,vehicleInOut TEXT,charges FLOAT,grossWeight FLOAT,netWeight FLOAT,customerName VARCHAR(75),itemName TEXT,quantity INT,invChalanNo VARCHAR(50),paymentOptions TEXT,remarks VARCHAR(100),tareWeight INT,date TEXT)')";
    this.createDatabase().then((db: SQLiteObject) => {
      db.executeSql(query, {}).then(res => console.log('executed')).catch(e => {
        console.log(e);
      });
    });
  }

  // To get data from table.
  public getData() {
    return this.createDatabase().then((db: SQLiteObject) => {
    return db.executeSql('SELECT * FROM DigiWeigh ORDER BY id DESC', {})
      .then(res => {
        console.log(res.toJSON());
      });
    });
  }


  
}
