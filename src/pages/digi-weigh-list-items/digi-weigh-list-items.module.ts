import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DigiWeighListItemsPage } from './digi-weigh-list-items';

@NgModule({
  declarations: [
    DigiWeighListItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(DigiWeighListItemsPage),
  ],
})
export class DigiWeighListItemsPageModule {}
