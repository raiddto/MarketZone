import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../app/environment';
import { AddMdPage } from '../add-md/add-md';

/**
 * Generated class for the MdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-md',
  templateUrl: 'md.html',
})
export class MdPage {

  mds;
  ref = firebase.database().ref('mds/');

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.ref.on('value', resp => {
      this.mds = snapshotToArray(resp);
    });
  }

  add() {
    this.navCtrl.push(AddMdPage);
  }

  async delete(key) {
    let alert = this.alertCtrl.create({
      title: 'Are you sure?',
      buttons: [
        {
          text: 'Yes',
          handler: data => {
            firebase.database().ref('mds/'+key).remove();
          }
        }, {
          text: 'No',
          role: 'cancel'
        }
      ]
    });
    alert.present();
  }

  edit(key) {
    let alert = this.alertCtrl.create({
      title: 'Edit',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'specialty',
          placeholder: 'Specialty'
        }
      ],
      buttons: [
        {
          text: 'Save',
          handler: data => {
            if (data.name !== undefined && data.name.length > 0) {
              firebase.database().ref('mds/'+key).update({name:data.name, specialty:data.specialty});
            }
          }
        }, {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    alert.present();
  }

  sign(key) {
    this.navCtrl.push('SignPage');
  }

}
