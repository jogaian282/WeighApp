import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DigiWeighingPage } from './digi-weighing';
import { DigiWeighingFormsPageModule } from './digi-weighing-forms/digi-weighing-forms.module';

@NgModule({
  declarations: [
    DigiWeighingPage,
  ],
  imports: [
    IonicPageModule.forChild(DigiWeighingPage),
    DigiWeighingFormsPageModule
  ],
})
export class DigiWeighingPageModule {}
