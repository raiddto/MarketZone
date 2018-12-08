import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

/**
 * Generated class for the AddFeedbacksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-feedbacks',
  templateUrl: 'add-feedbacks.html',
})
export class AddFeedbacksPage {

  ref = firebase.database().ref('fbs/');
  inputFeedbacks:string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  add(fb) {
    if (fb !== undefined && fb !== null) {
      let newFeedback = this.ref.push();
      newFeedback.set(fb);
      this.inputFeedbacks = '';
    }
    this.navCtrl.pop();
  }

}
