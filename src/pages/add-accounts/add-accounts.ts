import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

/**
 * Generated class for the AddAccountsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-accounts',
  templateUrl: 'add-accounts.html',
})
export class AddAccountsPage {

  ref = firebase.database().ref('acs/');
  inputName:string = '';
  inputDose:string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  add(ac) {
    if (ac !== undefined && ac !== null) {
      let newAccount = this.ref.push();
      newAccount.set(ac);
      this.inputName = '';
      this.inputDose = '';
    }
    this.navCtrl.pop();
  }

}
