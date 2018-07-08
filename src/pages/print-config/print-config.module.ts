import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrintConfigPage } from './print-config';

@NgModule({
  declarations: [
    PrintConfigPage,
  ],
  imports: [
    IonicPageModule.forChild(PrintConfigPage),
  ],
})
export class PrintConfigPageModule {}
