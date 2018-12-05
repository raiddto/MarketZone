import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../app/models/user';
import { AngularFireAuth } from 'angularfire2/auth'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, private toast: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(user: User) {
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.navCtrl.setRoot('TabsPage');
      }
    } catch(e) {
      this.toast.create({
        message: `Email address or password invalid`,
        duration: 3000
      }).present();
    }
  }

  register() {
    this.navCtrl.push('RegisterPage');
  }

}
