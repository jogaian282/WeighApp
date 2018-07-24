import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController, App, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public app: App,public alertCtrl: AlertController,
  public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: 'HomePage', icon: 'home'},
      { title: 'Digi Weighing', component: 'DigiWeighingPage', icon: 'speedometer'},
      { title: 'Digi Weighing List', component: 'DigiWeighListItemsPage', icon: 'list'},
      { title: 'Reports', component: 'ReportsPage', icon: 'pie'},
      { title: 'Settings', component: 'SettingsPage', icon: 'settings'},
      { title: 'Customers', component: 'CustomersPage', icon: 'person-add'},
      { title: 'Profile', component: 'ProfilePage', icon: 'person'},
      { title: 'Updates', component: 'UpdatePage', icon: 'cloud-upload'}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (typeof page.component === 'string' || page.component instanceof String) {
      this.navCtrl.push(page.component);
    } else {
      this.nav.setRoot(page.component);
    }
  }

  get navCtrl(): NavController {
    return this.app.getRootNav();
  }

  presentLogout() { ///<-- call this function straight with static button in html
    let alert = this.alertCtrl.create({
      title: 'Confirm Log Out',
      message: 'Are you sure you want to log out?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Log Out',
          handler: () => {
            console.log('Logged out');
            this.nav.setRoot(LoginPage);
          }
        }
      ]
    });
    alert.present();
  }

}
