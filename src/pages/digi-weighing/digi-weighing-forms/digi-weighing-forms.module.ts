import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { DigiWeighingFormsPage } from './digi-weighing-forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DigiWeighingFormsPage,
  ],
  imports: [
    IonicPageModule.forChild(DigiWeighingFormsPage),
    HttpClientModule,
    FormsModule
  ],
  providers: [
  ]
})
export class DigiWeighingFormsPageModule {}