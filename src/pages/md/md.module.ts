import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MdPage } from './md';

@NgModule({
  declarations: [
    MdPage,
  ],
  imports: [
    IonicPageModule.forChild(MdPage),
  ],
})
export class MdPageModule {}
