import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAccountsPage } from './add-accounts';

@NgModule({
  declarations: [
    AddAccountsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddAccountsPage),
  ],
})
export class AddAccountsPageModule {}
