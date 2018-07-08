import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public backImg: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.backImg = 'assets/imgs/logo-background.png';
  }

  ionViewDidLoad() {
  }

  public signIn() {
    this.navCtrl.setRoot('HomePage');
  }

  navigateToSignup() {
    this.navCtrl.push('SignupPage');
  }

  navigateToForgotPassword() {
    this.navCtrl.push('ForgotPasswordPage');
  }

}
