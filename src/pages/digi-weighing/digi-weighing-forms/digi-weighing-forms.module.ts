import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DigiWeighingFormsPage } from './digi-weighing-forms';
import { HttpClientModule } from '@angular/common/http';
import { OfflineWebProvider } from '../../../providers/offline-web/offline-web';

@NgModule({
  declarations: [
    DigiWeighingFormsPage,
  ],
  imports: [
    IonicPageModule.forChild(DigiWeighingFormsPage),
    HttpClientModule
  ],
  providers: [
    OfflineWebProvider
  ]
})
export class DigiWeighingFormsPageModule {}