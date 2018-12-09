import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import * as firebase from 'firebase';

/**
 * Generated class for the SignPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sign',
  templateUrl: 'sign.html',
})
export class SignPage {
  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  public signaturePadOptions : Object = {
    'minWidth': 2,
    'canvasWidth': 340,
    'canvasHeight': 200
  };

  signatureImage : string;
  signKey:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.signKey = navParams.get('signKey');
  }

  save() {
    this.signatureImage = this.signaturePad.toDataURL();
    firebase.database().ref('mds/'+this.signKey).update({sign:this.signatureImage});
    this.navCtrl.setRoot('MdPage', {signatureImage: this.signatureImage});
  }

  clear() {
    this.signaturePad.clear();
  }

}
