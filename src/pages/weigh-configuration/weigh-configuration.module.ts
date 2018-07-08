import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeighConfigurationPage } from './weigh-configuration';

@NgModule({
  declarations: [
    WeighConfigurationPage,
  ],
  imports: [
    IonicPageModule.forChild(WeighConfigurationPage),
  ],
})
export class WeighConfigurationPageModule {}
