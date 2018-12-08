import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

/**
 * Generated class for the AddMdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-md',
  templateUrl: 'add-md.html',
})
export class AddMdPage {

  mds;
  ref = firebase.database().ref('mds/');
  inputName:string = '';
  inputSpecialty:string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  add(md) {
    if (md !== undefined && md !== null) {
      let newMd = this.ref.push();
      newMd.set(md);
      this.inputName = '';
      this.inputSpecialty = '';
    }
    this.navCtrl.pop();
  }

}
