import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../app/environment';
import { AddDrugstorePage } from '../add-drugstore/add-drugstore';

/**
 * Generated class for the DrugstorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-drugstore',
  templateUrl: 'drugstore.html',
})
export class DrugstorePage {

  dss;
  ref = firebase.database().ref('dss/');

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.ref.on('value', resp => {
      this.dss = snapshotToArray(resp);
    });
  }

  add() {
    this.navCtrl.push(AddDrugstorePage);
  }

  async delete(key) {
    let alert = this.alertCtrl.create({
      title: 'Are you sure?',
      buttons: [
        {
          text: 'Yes',
          handler: data => {
            firebase.database().ref('dss/'+key).remove();
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
          name: 'product',
          placeholder: 'Product'
        },
        {
          name: 'remarks',
          placeholder: 'Remarks'
        }
      ],
      buttons: [
        {
          text: 'Save',
          handler: data => {
            if (data.name !== undefined && data.name.length > 0) {
              firebase.database().ref('dss/'+key).update({name:data.name, product:data.product, remarks:data.remarks});
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
