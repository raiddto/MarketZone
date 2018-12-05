import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrugstorePage } from './drugstore';

@NgModule({
  declarations: [
    DrugstorePage,
  ],
  imports: [
    IonicPageModule.forChild(DrugstorePage),
  ],
})
export class DrugstorePageModule {}
