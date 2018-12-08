import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

/**
 * Generated class for the AddDrugstorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-drugstore',
  templateUrl: 'add-drugstore.html',
})
export class AddDrugstorePage {

  ref = firebase.database().ref('drugstores/');
  inputName:string = '';
  inputProduct:string = '';
  inputRemarks:string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  add(drugstore) {
    if (drugstore !== undefined && drugstore !== null) {
      let newDrugstore = this.ref.push();
      newDrugstore.set(drugstore);
      this.inputName = '';
      this.inputProduct = '';
      this.inputRemarks = '';
    }
    this.navCtrl.pop();
  }

}
