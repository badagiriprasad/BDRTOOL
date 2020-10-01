import { Component, ChangeDetectionStrategy } from '@angular/core';
import {IonicPage, NavController ,NavParams} from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";
import {Storage} from "@ionic/storage";
import { HttpClient } from '@angular/common/http';
import { FleetDetailPage } from '../fleetdetail/fleetdetail';
import { RetreadBuyPack1Page } from '../retread_buypack1/retread_buypack1';
import { RetreadBuyPack2Page } from '../retread_buypack2/retread_buypack2';
import { Retread2Page } from '../retreads2/retreads2';
import { Retread1Page } from '../retreads1/retreads1';
import { HelpPage } from '../help/help';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { FontadjustmentProvider } from '../../providers/fontadjustment/fontadjustment';

declare var sendPdf :any;

@IonicPage()
@Component({
  
  selector: 'page-home',
  templateUrl: 'home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  isenabled;
  languageArr = ['en', 'es', 'en_ca', 'fr_ca', 'fr_fr'];
  languageMap = {"English (US)": 'en', "English (UK)" : "en-uk", "English (IN)":"en-in", "Francais":'fr',"Francais (CA)": "fr-QU","Arabic" : 'ar',"Bulgarian" : 'bg',
  "Czech" : 'cs',"Danish" : 'da',"Austria": 'de-AT',"German":'de',"Greek":'el',"Mexico":'es-MX',"Spanish":'es',"Estonian":'et',"Finnish":'fi',
  "Croatian":'hr',"Hungarian":'hu',"Indonesian":'id',"Italian":'it',"Japanese":'ja',"Korean":'ko',"Korean-Adjustment":'ko-ADJ',"Latvian":'lv',
  "Dutch":'nl',"Norwegian":'no',"Polish":'pl',"Portuguese (BR)":'pt-BR',"Portuguese":'pt',"Romanian":'ro',"Russian":'ru',"Slovak":'sk',"Slovenian":'sl',
  "Serbian":'sr',"Swedish":'sv',"Thai":'th',"Turkish":'tr',"Ukrainian":'uk',"Vietnamese":'vi',"Chinese (Simplified)":'zh-CN',"Chinese (Traditional)":'zh-TW'};


languageArr2 = {"en":"en","fr":"fr","cafr":"fr-QU","ar":"ar","bu":"bg","cz":"cs","dan":"da","ausde":"de-AT","de":"de","el":"el","esMX":"es-MX","es":"es","est":"et",
  "fi":"fi", "hr":"hr","hu":"","it":"it","jp":"ja","ko":"ko","ko-ADJ":"ko","let":"lv","nl":"nl","no":"no","po":"pl","BR":"pt-BR","prt":"pt","ro":"ro","ru":"ru","sk":"sk",
  "sl":"sl","sr":"sr","sw":"sv","th":"th","tr":"tr","ua":"uk","vi":"vi","sch":"zh-CN","tch":"zh-TW"};

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
"zh-CN": "Chinese (Simplified)",
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
  
    constructor(public navCtrl: NavController,public fontAdjustmentService: FontadjustmentProvider,private alertController : AlertController, public tranlateService:TranslateService, navParams :NavParams ,public storage : Storage,public http:HttpClient) {
      
    setTimeout(()=>{
      
            // if(localStorage.getItem('language') != null && this.languageArr.indexOf(localStorage.getItem('language')) != -1) {
            //   this.tranlateService.setDefaultLang(localStorage.getItem('language'));
            //   this.tranlateService.use(localStorage.getItem('language'));
            //   localStorage.setItem("selectedCurrency", this.currencyMapByLangs[this.languageMapReversed[this.languageArr2[localStorage.getItem("language")]]]);

            // }else {
            //   this.tranlateService.setDefaultLang("en");
            //   localStorage.setItem('language', 'en');
            //   localStorage.setItem("selectedCurrency", "USD");}
            
          }, 500);
  }
  ionViewDidLoad() {
  }

  openNext(){
     this.navCtrl.push(HelpPage);
  }
  
  openGommeGain(){
    this.navCtrl.setRoot(FleetDetailPage);
    // this.navCtrl.push(FleetDetailPage,{"tapbutton":"GommeGain"});
    
  }

  openRetreadBuyPack1(){
    this.navCtrl.setRoot(RetreadBuyPack1Page);
    // this.navCtrl.push(RetreadBuyPack1Page,{"tapbutton":"GommeGain"});
    
  }

  openRetreadBuyPack2(){
    this.navCtrl.setRoot(RetreadBuyPack2Page);
    // this.navCtrl.push(RetreadBuyPack2Page,{"tapbutton":"GommeGain"});
    
  }

  openRetread2(){

    this.navCtrl.setRoot(Retread2Page);
    //this.navCtrl.push(Retread2Page,{"tapbutton":"GommeGain"});
    
  }

  openRetread1(){
    this.navCtrl.setRoot(Retread1Page);
    // this.navCtrl.push(Retread1Page,{"tapbutton":"GommeGain"});
    
  }



  

  generatePDF(){
    
    var htmlStr = "";
    htmlStr += "<body>";
    if(localStorage.getItem('retread1') != null)
    {
      htmlStr += "<img alt='Embedded Image' style='width: 100%' src='" + localStorage.getItem('retread1') + "'>";
    }
      
    if(localStorage.getItem('retreads2') != null)
    {
      htmlStr += "<img alt='Embedded Image' style='width: 100%' src='" + localStorage.getItem('retreads2') + "'>";
    }

    if(localStorage.getItem('retreads3') != null)
    {
      htmlStr += "<img alt='Embedded Image' style='width: 100%' src='" + localStorage.getItem('retreads3') + "'>";
    }

    if(localStorage.getItem('retread_buypack1') != null)
    {
      htmlStr += "<img alt='Embedded Image' style='width: 100%' src='" + localStorage.getItem('retread_buypack1') + "'>";
    }

    if(localStorage.getItem('retread_buypack2') != null)
    {
      htmlStr += "<img alt='Embedded Image' style='width: 100%' src='" + localStorage.getItem('retread_buypack2') + "'>";
    }
    
    htmlStr += "</body>";
    
    var timeStamp = this.getTimestamp().toString();
  console.log(timeStamp);
      var emails = [];
      var obj = this;
      obj.isenabled = true;

    var defaultAlertInputValue =  "";
    if(emails.length != 0){
      defaultAlertInputValue = emails.join(";") + ";";
    }


    let alert = this.alertController.create({
      title: this.tranlateService.instant("addtional_email_input"),
      cssClass: 'custom-alert',
      inputs: [
        {
          name: this.tranlateService.instant("email_address"),
          placeholder: this.tranlateService.instant("email_address"),
          value: defaultAlertInputValue,
          type: 'text'
        }
      ],
      buttons: [
        {
          text: this.tranlateService.instant("cancel"),
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: this.tranlateService.instant("send_report"),
          handler: data => {

            var dataArr = data[obj.tranlateService.instant("email_address")].split(";");

            var filteredDataArr = dataArr.map(element => {
              if(element != null){
                return element.trim();
              }
            }).filter(elem => elem != null && elem != '');


            for(var elem of filteredDataArr){
              if(!obj.validateEmail(elem)){
                alert.setMessage(obj.tranlateService.instant('email_incorrect'));
                return false;
              }
            };


            emails = [];
            emails.push(...filteredDataArr);

            console.log(emails);

            var evPar = {
              "uniqueTimeStamp": timeStamp,
              "html": htmlStr,
              "body": obj.tranlateService.instant("bdr_report_attached"),
              "fromName": obj.tranlateService.instant("from_Michelin"),
              "emailSubject": obj.tranlateService.instant("bdr_report"),
              "filename": obj.tranlateService.instant("report_pdf"),
              "toAddresses": emails,
              "addAtachment" : true,
              "sfdcID" : localStorage.getItem("accountId")
            };
            localStorage.setItem("report", JSON.stringify(evPar));

             sendPdf();

          }
        }
      ]
    });
    alert.present().then(() => {
      const firstInput: any = document.querySelector('ion-alert input');
      firstInput.focus();
      firstInput.setSelectionRange(1000,1001);
      return;
    });
  }

    getTimestamp() {
      try {
        var thisTimeStamp = new Date().getTime();
        return thisTimeStamp;
      }
      catch(e) {
        alert(e);
      }
     }
    
     validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

}
