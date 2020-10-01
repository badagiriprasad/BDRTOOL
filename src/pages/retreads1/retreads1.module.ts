

import { NgModule } from '@angular/core';
import { IonicPageModule} from 'ionic-angular';
import { Retread1Page } from './retreads1';

@NgModule({
  declarations: [
    Retread1Page,
  ],
  imports: [
    IonicPageModule.forChild(Retread1Page),
  ],
  exports: [
    Retread1Page
  ]
})
export class Retread1PageModule {}
