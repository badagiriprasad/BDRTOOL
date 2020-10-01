import {Component, ViewChild} from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {Platform} from 'ionic-angular'
// import * as pdfmake from 'pdfmake/build/pdfmake';
// import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import {HomePage} from "../home/home";
import {TranslateService} from '@ngx-translate/core';
import {Storage} from '@ionic/storage';

import {DataService} from "../../providers/data-service";
import {AutocompletePagePage} from "../autocomplete-page/autocomplete-page";


/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  @ViewChild('currencyInputBox') currencyInputBox;
  currencyArr: string[];

  @ViewChild('language') languageBox;


  tracks: Array<{name: string, isChecked: boolean}> = [];
  isiOSAndroid:boolean = false;

  show = false;

  backimg:any;

  language = 'English (US)';


  languageCode = 'EN';
  


  languages = ["English (US)","English (CA)","Chinese (Simplified)","Hungarian","Serbian","Francais"];

  languageMap = {"English (US)": "en", "English (CA)" : "en_ca","Chinese (Simplified)":"zh-cn","Serbian":"sr","Hungarian":"hu","Francais":"fr"};
  languageMapReverse = {"en": "English (US)","en_ca": "English (CA)","zh-cn":"Chinese (Simplified)","sr":"Serbian","hu":"Hungarian","fr":"Francais"};
  currencyMapByLang = {
    "English (US)": "USD",
    "English (CA)": "USD",
    "English (UK)": "GBP",
    "Francais (CA)": "EUR",
    "Espanol (MX)": "USD",
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

  selectedLanguage: string = "English (US)";
  currencyCode = "EUR";



  settingItems = [];
  initialiazeValues() {
    this.currencyArr = [];
    this.dataService.getData('assets/data/Currency.json').subscribe((currencyData) => {
  
      for (var i = 0; i < Object.keys(currencyData).length; i++) {
        this.currencyArr.push(Object.keys(currencyData[i])[0])
        localStorage.setItem(Object.keys(currencyData[i])[0],currencyData[i][Object.keys(currencyData[i])[0]]);
      }
    })
  }

  constructor( private dataService: DataService,public navCtrl: NavController,public translateServices: TranslateService, public navParams: NavParams, public thisPlt:Platform, public translateService:TranslateService,  public storage:Storage, private modalCtrl:ModalController) {
    this.initialiazeValues();

    this.tracks.push({name:"Metric Units", isChecked:true});
    this.backimg = 'assets/img/BIB-MICHELIN.jpg';

    if(this.thisPlt.is('ios') || this.thisPlt.is('android')){
      this.isiOSAndroid = true;
    }

    if (localStorage.getItem("selectedCurrency") != null && localStorage.getItem("selectedCurrency") != undefined) {
      
      this.currencyCode = localStorage.getItem("selectedCurrency");
    }
    if (localStorage.getItem("selectedLanguage") != null && localStorage.getItem("selectedLanguage") != undefined) {
      console.log("storageLang",localStorage.getItem("language"));
      console.log("storageLangMAp",this.languageMapReverse[localStorage.getItem("language")]);
      this.selectedLanguage = localStorage.getItem("selectedLanguage");
    }
  this.tracks[0].isChecked = localStorage.getItem('unit system') == 'metric'?true:false;

    //this.selectedLanguage = this.languageMapReverse[localStorage.getItem('language').toLowerCase()];


    //this.selectedLanguage = this.languageMapReverse[localStorage.getItem('language')];

    

    if (this.selectedLanguage == null || this.selectedLanguage == undefined) {
      this.translateServices.setDefaultLang(this.languageMap["English (US)"]);
      this.translateServices.use(this.languageMap["English (US)"]);
    } else {
      this.translateServices.setDefaultLang(this.languageMap[this.selectedLanguage]);
      this.translateServices.use(this.languageMap[this.selectedLanguage]);
    }


  }



  ionViewDidLoad() {
   

if(this.selectedLanguage == null || this.selectedLanguage == "" || this.selectedLanguage == undefined){
      this.selectedLanguage = "English (US)";
    }

  }


  onChange(languageValue) {
    console.log("langMap",this.languageMap[languageValue]);
    this.translateServices.setDefaultLang(this.languageMap[languageValue]);
    this.translateServices.use(this.languageMap[languageValue]);
    localStorage.setItem('language',this.languageMap[languageValue]);
    console.log("OnchangeSelectedCurr",this.currencyMapByLang[languageValue]);
    localStorage.setItem("selectedCurrency",this.currencyMapByLang[languageValue]);
    this.currencyCode = this.currencyMapByLang[languageValue];

  }

  onChangeUnits(units){
  }


  openNext(){
    var unitsSystem = this.tracks[0].isChecked ? "metric" : "us";

    this.navCtrl.setRoot(HomePage, {'language': this.languageMap[this.selectedLanguage], "units":unitsSystem});

  }
  // ionViewWillEnter(){
  //   this.currencyCode=localStorage.getItem("selectedCurrency");
  //   this.selectedLanguage=localStorage.getItem("selectedLanguage");
  // }

  ionViewWillLeave() {

    // localStorage.setItem('settingparameters', JSON.stringify(settingModel));
    localStorage.setItem('units', this.tracks[0].isChecked?'false':"true");
  }
  
  Swap(dict){
  var ret = {};
  for(var key in dict){
    ret[dict[key]] = key;
  }
  return ret;
}
  showAutocompleteModal (id) {
   switch (id) {
    case 0:
        let modal = this.modalCtrl.create(AutocompletePagePage, {passedinData: this.languages, type: 'language'});
        modal.onDidDismiss(data => {
          console.log("langDta",data);
              this.selectedLanguage = data;
              localStorage.setItem("selectedLanguage", this.selectedLanguage);
              this.onChange(this.selectedLanguage);
        });
        modal.present();
        break;

      case 1:
    
      let modal1 = this.modalCtrl.create(AutocompletePagePage, {passedinData: this.currencyArr});
      modal1.onDidDismiss(data => {
            this.currencyCode = data;
            localStorage.setItem("selectedCurrency",data);
      });
      modal1.present();

      break;

   }
    
  }


onUnitsChange(){
    localStorage.setItem('unit system', this.tracks[0].isChecked?'metric':'us');
}


resetApp(){


  var accountEmail = localStorage.getItem('accountContactEmail');
  var currencyCode  = localStorage.getItem('currencyCode');
  var language = localStorage.getItem("originLanguage");
  var fleetName = localStorage.getItem('fleetName');
  var userEmail = localStorage.getItem('userEmail');

  this.storage.clear();
  localStorage.clear();
  sessionStorage.clear();


  localStorage.setItem('accountContactEmail', accountEmail);
  localStorage.setItem('currencyCode', currencyCode);
  localStorage.setItem("language", language);
  localStorage.setItem("originLanguage", language);
  localStorage.setItem('fleetName', fleetName);
  localStorage.setItem('userEmail', userEmail);
  this.selectedLanguage = this.languageMapReverse[language];
  this.translateService.setDefaultLang(language);

}


}



