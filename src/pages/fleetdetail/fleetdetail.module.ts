import { NgModule } from '@angular/core';
import { IonicPageModule} from 'ionic-angular';
import { FleetDetailPage } from './fleetdetail';

@NgModule({
  declarations: [
    FleetDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FleetDetailPage),
  ],
  exports: [
    FleetDetailPage
  ]
})
export class FleetDetailPageModule {}
