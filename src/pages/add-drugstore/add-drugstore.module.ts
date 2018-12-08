import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDrugstorePage } from './add-drugstore';

@NgModule({
  declarations: [
    AddDrugstorePage,
  ],
  imports: [
    IonicPageModule.forChild(AddDrugstorePage),
  ],
})
export class AddDrugstorePageModule {}
