import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { FleetDetailPage } from '../pages/fleetdetail/fleetdetail';
import { RetreadBuyPack1Page } from '../pages/retread_buypack1/retread_buypack1';
import { RetreadBuyPack2Page } from '../pages/retread_buypack2/retread_buypack2';
import { Retread2Page } from '../pages/retreads2/retreads2';
import { Retread1Page } from '../pages/retreads1/retreads1';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import {TranslateService} from '@ngx-translate/core';

// import { HelpPage } from '../pages/help/help';
declare var closeModal: any;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  defaultPitcherLang="";
  pages: Array<{title: string, component: any}>;
  languageMap = {"English (US)": 'en', "English (UK)" : "en-uk", "English (IN)":"en-in", "Francais":'fr',"Francais (CA)": "fr-QU","Arabic" : 'ar',"Bulgarian" : 'bg',
  "Czech" : 'cs',"Danish" : 'da',"Austria": 'de-AT',"German":'de',"Greek":'el',"Mexico":'es-MX',"Spanish":'es',"Estonian":'et',"Finnish":'fi',
  "Croatian":'hr',"Hungarian":'hu',"Indonesian":'id',"Italian":'it',"Japanese":'ja',"Korean":'ko',"Korean-Adjustment":'ko-ADJ',"Latvian":'lv',
  "Dutch":'nl',"Norwegian":'no',"Polish":'pl',"Portuguese (BR)":'pt-BR',"Portuguese":'pt',"Romanian":'ro',"Russian":'ru',"Slovak":'sk',"Slovenian":'sl',
  "Serbian":'sr',"Swedish":'sv',"Thai":'th',"Turkish":'tr',"Ukrainian":'uk',"Vietnamese":'vi',"Chinese (Simplified)":'zh-cn',"Chinese (Traditional)":'zh-TW'};


languageArr = {"en":"en","fr":"fr","cafr":"fr-QU","ar":"ar","bu":"bg","cz":"cs","dan":"da","ausde":"de-AT","de":"de","el":"el","esMX":"es-MX","es":"es","est":"et",
  "fi":"fi", "hr":"hr","hu":"","it":"it","jp":"ja","ko":"ko","ko-ADJ":"ko","let":"lv","nl":"nl","no":"no","po":"pl","BR":"pt-BR","prt":"pt","ro":"ro","ru":"ru","sk":"sk",
  "sl":"sl","sr":"sr","sw":"sv","th":"th","tr":"tr","ua":"uk","vi":"vi","sch":"zh-cn","tch":"zh-TW"};

languageMapReversed = {
"en": "English (US)",
"en-CA": "English (CA)",
"fr-QU": "Francais (CA)",
"fr": "Francais",
"ar": "Arabic",
"bg": "Bulgarian",
"cs": "Czech",
"da": "Danish",
"de-AT": "Austria",
"de": "German",
"Greek": "el",
"es-MX": "Mexico",
"es": "Spanish",
"et": "Estonian",
"fi": "Finnish",
"hr": "Croatian",
"hu": "Hungarian",
"it": "Italian",
"ja": "Japanese",
"ko": "Korean",
"lv": "Latvian",
"nl": "Dutch",
"no": "Norwegian",
"pl": "Polish",
"pt-BR": "Portuguese (BR)",
"pt": "Portuguese",
"ro": "Romanian",
"ru": "Russian",
"sk": "Slovak",
"sl": "Slovenian",
"sr": "Serbian",
"sv": "Swedish",
"th": "Thai",
"tr": "Turkish",
"uk": "Ukrainian",
"vi": "Vietnamese",
"zh-cn": "Chinese (Simplified)",
"zh-TW": "Chinese (Traditional)"
};
currencyMapByLangs = {
"English (US)": "USD",
"English (CA)": "USD",
"Francais (CA)": "EUR",
"Francais": "EUR",
"Arabic": "AED",
"Bulgarian": "BGN",
"Czech": "CZK",
"Danish": "DKK",
"Austria": "ATS",
"German": "EUR",
"Greek": "EUR",
"Mexico": "MXN",
"Spanish": "EUR",
"Estonian": "EUR",
"Finnish": "EUR",
"Croatian": "HRK",
"Hungarian": "HUF",
"Italian": "EUR",
"Japanese": "JPY",
"Korean": "KPW",
"Latvian": "EUR",
"Dutch": "EUR",
"Norwegian": "NOK",
"Polish": "PLN",
"Portuguese (BR)": "EUR",
"Portuguese": "EUR",
"Romanian": "RON",
"Russian": "RUB",
"Slovak": "EUR",
"Slovenian": "EUR",
"Serbian": "RSD",
"Swedish": "SEK",
"Thai": "THB",
"Turkish": "TRY",
"Ukrainian": "UAH",
"Vietnamese": "VND",
"Chinese (Simplified)": "CNY",
"Chinese (Traditional)": "CNY"
};


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public alertCtrl:AlertController,private translate: TranslateService) {
    setTimeout(() => {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage } ,
      { title: '1 Retread', component: Retread1Page } ,
      { title: '2 Retreads', component: Retread2Page } ,
      { title: '3 Retreads', component: FleetDetailPage } ,
      { title: '1 Retread / Buy Back', component: RetreadBuyPack1Page } ,
      { title: '2 Retreads / Buy Back', component: RetreadBuyPack2Page } ,
      { title: 'Settings', component:  SettingsPage }   
        
    ];
    //localStorage.setItem("originLanguage", "sr");
    if(localStorage.getItem("originLanguage")!=null && localStorage.getItem("originLanguage")!="" && this.languageArr[localStorage.getItem("originLanguage")] != null && this.languageArr[localStorage.getItem("originLanguage")] != "")
    {
      this.translate.setDefaultLang(this.languageArr[localStorage.getItem("originLanguage")]);
      this.translate.use(this.languageArr[localStorage.getItem("originLanguage")]);
      localStorage.setItem("language",this.languageArr[localStorage.getItem("originLanguage")]);
      localStorage.setItem("selectedLanguage", this.languageMapReversed[this.languageArr[localStorage.getItem("originLanguage")]]);
      localStorage.setItem("selectedCurrency", this.currencyMapByLangs[this.languageMapReversed[this.languageArr[localStorage.getItem("originLanguage")]]]);
    }else{


      this.translate.setDefaultLang("en");
      this.translate.use("en");
      localStorage.setItem("language","en");
      localStorage.setItem("selectedCurrency", "USD");
      localStorage.setItem("selectedLanguage","English (US)")
    }
    }, 500);
    }

  
    initializeApp() {
      this.platform.ready().then(() => {
        this.defaultPitcherLang = localStorage.getItem("originLanguage");
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });}

   
  

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  exitBDRApp(){
    localStorage.clear();
    closeModal();

    // closeModal();
  }

 
}
