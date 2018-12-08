import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../app/environment';
import { AlertController } from 'ionic-angular';
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
  inputName:string = '';
  inputSpecialty:string = '';

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
      buttons: [
        {
          text: 'Delete',
          handler: data => {
            firebase.database().ref('mds/'+key).remove();
          }
        }, {
          text: 'Cancel',
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
          text: 'Edit',
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

}
