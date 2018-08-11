import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { DigiWeighingFormsPage } from './digi-weighing-forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DigiWeighingFormsPage,
  ],
  imports: [
    IonicPageModule.forChild(DigiWeighingFormsPage),
    HttpClientModule,
    ReactiveFormsModule,
    BrMaskerModule,
    FormsModule
  ],
  providers: [
  ]
})
export class DigiWeighingFormsPageModule {}