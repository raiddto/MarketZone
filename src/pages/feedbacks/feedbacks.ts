import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../app/environment';
import { AddFeedbacksPage } from '../add-feedbacks/add-feedbacks';

/**
 * Generated class for the FeedbacksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedbacks',
  templateUrl: 'feedbacks.html',
})
export class FeedbacksPage {

  fbs;
  ref = firebase.database().ref('fbs/');

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.ref.on('value', resp => {
      this.fbs = snapshotToArray(resp);
    });
  }

  add() {
    this.navCtrl.push(AddFeedbacksPage);
  }

  async delete(key) {
    let alert = this.alertCtrl.create({
      title: 'Are you sure?',
      buttons: [
        {
          text: 'Yes',
          handler: data => {
            firebase.database().ref('fbs/'+key).remove();
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
          name: 'feedbacks',
          placeholder: 'Highlights and Feedbacks'
        }
      ],
      buttons: [
        {
          text: 'Save',
          handler: data => {
            if (data.feedbacks !== undefined && data.feedbacks.length > 0) {
              firebase.database().ref('acs/'+key).update({feedbacks:data.feedbacks});
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
