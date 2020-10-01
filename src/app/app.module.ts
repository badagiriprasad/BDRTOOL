import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {JsonData} from '../providers/json-data';
import {TranslateService} from '@ngx-translate/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SettingsPage } from '../pages/settings/settings';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule, Http } from '@angular/http';
import { FleetDetailPage } from '../pages/fleetdetail/fleetdetail';
import { RetreadBuyPack1Page } from '../pages/retread_buypack1/retread_buypack1';
import { RetreadBuyPack2Page } from '../pages/retread_buypack2/retread_buypack2';
import { Retread2Page } from '../pages/retreads2/retreads2';
import { Retread1Page } from '../pages/retreads1/retreads1';
import { AutocompletePagePage } from '../pages/autocomplete-page/autocomplete-page'; 
import { HelpPage } from '../pages/help/help';
import {DataRangeValidationService} from "../providers/dataRangeValidationService";
import { DataService } from '../providers/data-service';
import { FontadjustmentProvider } from '../providers/fontadjustment/fontadjustment';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,
    AutocompletePagePage,
    FleetDetailPage,
    RetreadBuyPack1Page,
    RetreadBuyPack2Page,
    Retread2Page,
    Retread1Page,
    HelpPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage,
    AutocompletePagePage,
    FleetDetailPage,
    RetreadBuyPack1Page,
    RetreadBuyPack2Page,
    Retread2Page,
    Retread1Page,
    HelpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataRangeValidationService,
    DataService,
    FontadjustmentProvider,
    [{provide: ErrorHandler, useClass: IonicErrorHandler}, JsonData, TranslateService]
  ]
})
export class AppModule {

  
}
