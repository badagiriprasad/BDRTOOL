import {Injectable} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import {AlertController} from "ionic-angular";
/**
 * Created by hua on 11/10/17.
 */


@Injectable()
export class DataRangeValidationService {

  constructor(public translateService : TranslateService, public alertCtrl: AlertController) {
  }


  handValueOutOfRangeErrorMessage(resetFunction){

    this.translateService.get(['out_of_range_alert_msg', 'dismiss', 'cancel']).subscribe(text => {


      let alert = this.alertCtrl.create({
        message: text['out_of_range_alert_msg'],
        buttons: [
          {
            text: text['dismiss'],
            role: 'cancel',
            handler: () => {
              resetFunction();
            }
          }
        ]
      });
      alert.present();
    });

  }

}
