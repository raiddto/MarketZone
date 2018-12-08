import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddFeedbacksPage } from './add-feedbacks';

@NgModule({
  declarations: [
    AddFeedbacksPage,
  ],
  imports: [
    IonicPageModule.forChild(AddFeedbacksPage),
  ],
})
export class AddFeedbacksPageModule {}
