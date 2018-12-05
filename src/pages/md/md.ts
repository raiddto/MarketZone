import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../app/environment';
import { AlertController } from 'ionic-angular';

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

  items;
  ref = firebase.database().ref('items/');
  inputName:string = '';
  inputJob:string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.ref.on('value', resp => {
      this.items = snapshotToArray(resp);
    });
  }

  addItem(item) {
    if (item !== undefined && item !== null) {
      let newItem = this.ref.push();
      newItem.set(item);
      this.inputName = '';
      this.inputJob = '';
    }
  }

  async delItem(key) {
    let alert = this.alertCtrl.create({
      buttons: [
        {
          text: 'Delete',
          handler: data => {
            firebase.database().ref('items/'+key).remove();
          }
        }, {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    alert.present();
  }

  editItem(key) {
    let alert = this.alertCtrl.create({
      title: 'Edit item',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'job',
          placeholder: 'Job'
        }
      ],
      buttons: [
        {
          text: 'Edit',
          handler: data => {
            if (data.name !== undefined && data.name.length > 0) {
              firebase.database().ref('items/'+key).update({name:data.name, job:data.job});
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
