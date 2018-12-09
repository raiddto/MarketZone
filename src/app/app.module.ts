import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
// npm install --save ionic-long-press
import { LongPressModule } from 'ionic-long-press';
import { SignaturePadModule } from 'angular2-signaturepad';

import { AddMdPage } from '../pages/add-md/add-md';
import { AddDrugstorePage } from '../pages/add-drugstore/add-drugstore';
import { AddAccountsPage } from '../pages/add-accounts/add-accounts';
import { AddFeedbacksPage } from '../pages/add-feedbacks/add-feedbacks';
import { SignPage } from '../pages/sign/sign';

@NgModule({
  declarations: [
    MyApp,
    AddMdPage,
    AddDrugstorePage,
    AddFeedbacksPage,
    AddAccountsPage,
    SignPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    LongPressModule,
    SignaturePadModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddMdPage,
    AddDrugstorePage,
    AddFeedbacksPage,
    AddAccountsPage,
    SignPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
