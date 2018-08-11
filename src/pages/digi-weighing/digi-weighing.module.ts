import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { DigiWeighingPage } from './digi-weighing';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { DigiWeighingFormsPageModule } from './digi-weighing-forms/digi-weighing-forms.module';

@NgModule({
  declarations: [
    DigiWeighingPage
  ],
  imports: [
    IonicPageModule.forChild(DigiWeighingPage),
    DigiWeighingFormsPageModule,
    BrMaskerModule,
    FormsModule
  ],
})
export class DigiWeighingPageModule {}
