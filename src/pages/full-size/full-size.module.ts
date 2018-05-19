import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FullSize } from './full-size';

@NgModule({
  declarations: [
    FullSize,
  ],
  imports: [
    IonicPageModule.forChild(FullSize),
  ],
})
export class FullSizeModule {}
