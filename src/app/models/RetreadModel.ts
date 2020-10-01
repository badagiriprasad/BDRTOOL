import {Storage} from '@ionic/storage'

export class RetreadModel{

michelinTirePrice = 0;
competitorTirePrice = 0;
averageCost = 0;
priceGap = 0;

perceiverGap = 0;
realGap = 0;


constructor(public title: string, public items: any[]) {

  }
}