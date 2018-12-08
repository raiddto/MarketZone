import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../app/environment';
import { AddAccountsPage } from '../add-accounts/add-accounts';

/**
 * Generated class for the AccountsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accounts',
  templateUrl: 'accounts.html',
})
export class AccountsPage {

  acs;
  ref = firebase.database().ref('acs/');

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.ref.on('value', resp => {
      this.acs = snapshotToArray(resp);
    });
  }

  add() {
    this.navCtrl.push(AddAccountsPage);
  }

  async delete(key) {
    let alert = this.alertCtrl.create({
      title: 'Are you sure?',
      buttons: [
        {
          text: 'Yes',
          handler: data => {
            firebase.database().ref('acs/'+key).remove();
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
          name: 'dose',
          placeholder: 'Starter Dose / Stock Donations'
        }
      ],
      buttons: [
        {
          text: 'Save',
          handler: data => {
            if (data.name !== undefined && data.name.length > 0) {
              firebase.database().ref('acs/'+key).update({name:data.name, dose:data.dose});
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
