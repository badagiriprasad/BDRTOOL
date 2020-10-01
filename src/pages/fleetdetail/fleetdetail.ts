import { Component , ViewChild, ChangeDetectionStrategy} from '@angular/core';
import {IonicPage,Navbar ,AlertController, NavController, NavParams} from 'ionic-angular';
import {JsonData} from '../../providers/json-data'
import {TranslateService} from "@ngx-translate/core";
import {Storage} from "@ionic/storage";
import { HelpPage } from '../help/help';
import {DataRangeValidationService} from "../../providers/dataRangeValidationService";
import { HomePage } from '../home/home';
// import * as html2canvas from '../../html2canvas.js';

// import * as html2canvas from 'html2canvas.js';

import * as html2canvas from 'html2canvas';
import { FontadjustmentProvider } from '../../providers/fontadjustment/fontadjustment';
//import { Directive, Renderer2, ElementRef } from '@angular/core';



@IonicPage()
@Component({
  selector: 'page-fleetdetail',
  templateUrl: 'fleetdetail.html',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class FleetDetailPage {
    @ViewChild(Navbar) navBar:Navbar;
    
    
  isBrandView_Retread_1 : number = -1;
  selectedCurrency="";
  logoId_Retread_1:number = 2;

  isBrandViewSelection_Retread_1:boolean=false;

  isBrandView_Retread_2 : number = -1;

  logoId_Retread_2:number = 2;

  isBrandViewSelection_Retread_2:boolean=false;

  isBrandView_Retread_3 : number = -1;

  logoId_Retread_3:number = 3;

  isBrandViewSelection_Retread_3:boolean=false;


  mich_price_of_new:number;

  mich_price_of_new_test;

  mich_price_1st_retread:number = 0;

  mich_price_2nd_retread:number = 0;

  mich_price_3rd_retread:number = 0;
  
  mich_1st_retread_acceptance: number = 0;

  mich_2nd_retread_acceptance: number = 0;

  mich_3rd_retread_acceptance : number = 0;

  mich_avg_cost : number = 0;


  comp_price_of_new:number = 0;

  comp_price_1st_retread:number = 0;

  comp_price_2nd_retread:number = 0;

  comp_price_3rd_retread:number = 0;
  
  comp_1st_retread_acceptance: number = 0;

  comp_2nd_retread_acceptance: number = 0;

  comp_3rd_retread_acceptance : number = 0;

  comp_avg_cost : number = 0;

  pricegap_price_of_new : number = 0;

  pricegap_price1st_retread : number = 0;

  pricegap_price2nd_retread : number = 0;

  pricegap_price3rd_retread : number = 0;

  pricegap_price_of_new_percentage : number = 0;

  pricegap_price1st_retread_percentage : number = 0;

  pricegap_price2nd_retread_percentage : number = 0;

  pricegap_price3rd_retread_percentage : number = 0;

  pricegap_avg_cost : number =0;

  pricegap_avg_cost_percentage : number =0;

  pricegap : number = 0;

  // mich_avg_cost_ui : number = 0;

  // comp_avg_cost_ui : number = 0;

  // pricegap_avg_cost_ui : number =0;

  public date: any = new Date().toISOString();
  company="";
  addrees="";
  customerCity="";
  customerZipCode ="";
  customerName = "";
  customerPhone = "";
  userName = "";
  userEmail = "";

  brandChoice : number = 1 ;
  currency="EUR";

    

  constructor(public navCtrl: NavController, public jsonData :JsonData, public storage : Storage,
  public tranlateService:TranslateService, navParams :NavParams, public alertCtrl:AlertController,
  public dataRangeService: DataRangeValidationService,public fontAdjustmentService: FontadjustmentProvider) {

    // ,private renderer: Renderer2

    //this.brandChoice = localStorage.getItem("retread3_brandChoice") == null ? 1 : parseInt(localStorage.getItem("retread3_brandChoice"));
    if (localStorage.getItem("selectedCurrency") != null && localStorage.getItem("selectedCurrency") != undefined) {
    
      this.currency = localStorage.getItem(localStorage.getItem("selectedCurrency"));
    }

    // if (localStorage.getItem("language") != null && localStorage.getItem("language") != undefined) {
    //   this.selectedLanguage = this.languageMapReverse[localStorage.getItem("language")];
    // }
    this.getLocalStorageValue(this.brandChoice);

    this.calculate_mich_avg_cost(5,null,false,"");

    this.calculate_comp_avg_cost(5,null,false,"");

    this.checkDeliveryDetail();
    

  }

  focusValue(name)
  {
    if(name == "mich_price_of_new")
    {
      if(this.mich_price_of_new == 0)
        this.mich_price_of_new = parseInt("");
    }
    
    if(name == "mich_price_1st_retread")
    {
      if(this.mich_price_1st_retread == 0)
        this.mich_price_1st_retread = parseInt("");
    }

    if(name == "mich_price_2nd_retread")
    {
      if(this.mich_price_2nd_retread == 0)
        this.mich_price_2nd_retread = parseInt("");
    }

    if(name == "mich_price_3rd_retread")
    {
      if(this.mich_price_3rd_retread == 0)
        this.mich_price_3rd_retread = parseInt("");
    }

    if(name == "mich_1st_retread_acceptance")
    {
      if(this.mich_1st_retread_acceptance == 0)
        this.mich_1st_retread_acceptance = parseInt("");
    }

    if(name == "mich_2nd_retread_acceptance")
    {
      if(this.mich_2nd_retread_acceptance == 0)
        this.mich_2nd_retread_acceptance = parseInt("");
    }

    if(name == "mich_3rd_retread_acceptance")
    {
      if(this.mich_3rd_retread_acceptance == 0)
        this.mich_3rd_retread_acceptance = parseInt("");
    }

    if(name == "comp_price_of_new")
    {
      if(this.comp_price_of_new == 0)
        this.comp_price_of_new = parseInt("");
    }

    if(name == "comp_price_1st_retread")
    {
      if(this.comp_price_1st_retread == 0)
        this.comp_price_1st_retread = parseInt("");
    }

    if(name == "comp_price_2nd_retread")
    {
      if(this.comp_price_2nd_retread == 0)
        this.comp_price_2nd_retread = parseInt("");
    }

    if(name == "comp_price_3rd_retread")
    {
      if(this.comp_price_3rd_retread == 0)
        this.comp_price_3rd_retread = parseInt("");
    }

    if(name == "comp_1st_retread_acceptance")
    {
      if(this.comp_1st_retread_acceptance == 0)
        this.comp_1st_retread_acceptance = parseInt("");
    }

    if(name == "comp_2nd_retread_acceptance")
    {
      if(this.comp_2nd_retread_acceptance == 0)
        this.comp_2nd_retread_acceptance = parseInt("");
    }

    if(name == "comp_3rd_retread_acceptance")
    {
      if(this.comp_3rd_retread_acceptance == 0)
        this.comp_3rd_retread_acceptance = parseInt("");
    }

  }

  openHomePage(){
    
    this.navCtrl.setRoot(HomePage);
  }

  restrictNumeric(e) {
    let input;
    if (e.metaKey || e.ctrlKey) {
      return true;
    }
    if (e.which === 32) {
     return false;
    }
    if (e.which === 0) {
     return true;
    }
    if (e.which < 33) {
      return true;
    }
    input = String.fromCharCode(e.which);
    return !!/[\d\s]/.test(input);
   }

  getLocalStorageValue(brandChoiceID)
  {
    this.mich_price_of_new = localStorage.getItem("retread3_mich_price_of_new"+brandChoiceID) == null ? 0 : parseInt(localStorage.getItem("retread3_mich_price_of_new" + brandChoiceID));
    this.mich_price_1st_retread = localStorage.getItem("retread3_mich_price_1st_retread"+brandChoiceID) == null ? 0 : parseInt(localStorage.getItem("retread3_mich_price_1st_retread" + brandChoiceID));
    this.mich_price_2nd_retread = localStorage.getItem("retread3_mich_price_2nd_retread" + brandChoiceID) == null ? 0 : parseInt(localStorage.getItem("retread3_mich_price_2nd_retread" + brandChoiceID));
    this.mich_price_3rd_retread = localStorage.getItem("retread3_mich_price_3rd_retread" + brandChoiceID) == null ? 0 : parseInt(localStorage.getItem("retread3_mich_price_3rd_retread" + brandChoiceID));
    this.mich_1st_retread_acceptance = localStorage.getItem("retread3_mich_1st_retread_acceptance" + brandChoiceID) == null ? 0 : parseInt(localStorage.getItem("retread3_mich_1st_retread_acceptance" + brandChoiceID));
    this.mich_2nd_retread_acceptance = localStorage.getItem("retread3_mich_2nd_retread_acceptance" + brandChoiceID) == null ? 0 : parseInt(localStorage.getItem("retread3_mich_2nd_retread_acceptance" + brandChoiceID));
    this.mich_3rd_retread_acceptance = localStorage.getItem("retread3_mich_3rd_retread_acceptance" + brandChoiceID) == null ? 0 : parseInt(localStorage.getItem("retread3_mich_3rd_retread_acceptance" + brandChoiceID));

    this.comp_price_of_new = localStorage.getItem("retread3_comp_price_of_new" + brandChoiceID) == null ? 0 : parseInt(localStorage.getItem("retread3_comp_price_of_new" + brandChoiceID));
    this.comp_price_1st_retread = localStorage.getItem("retread3_comp_price_1st_retread" + brandChoiceID) == null ? 0 : parseInt(localStorage.getItem("retread3_comp_price_1st_retread" + brandChoiceID));
    this.comp_price_2nd_retread = localStorage.getItem("retread3_comp_price_2nd_retread" + brandChoiceID) == null ? 0 : parseInt(localStorage.getItem("retread3_comp_price_2nd_retread" + brandChoiceID));
    this.comp_price_3rd_retread = localStorage.getItem("retread3_comp_price_3rd_retread" + brandChoiceID) == null ? 0 : parseInt(localStorage.getItem("retread3_comp_price_3rd_retread" + brandChoiceID));
    this.comp_1st_retread_acceptance = localStorage.getItem("retread3_comp_1st_retread_acceptance" + brandChoiceID) == null ? 0 : parseInt(localStorage.getItem("retread3_comp_1st_retread_acceptance" + brandChoiceID));
    this.comp_2nd_retread_acceptance = localStorage.getItem("retread3_comp_2nd_retread_acceptance" + brandChoiceID) == null ? 0 : parseInt(localStorage.getItem("retread3_comp_2nd_retread_acceptance" + brandChoiceID));
    this.comp_3rd_retread_acceptance = localStorage.getItem("retread3_comp_3rd_retread_acceptance" + brandChoiceID) == null ? 0 : parseInt(localStorage.getItem("retread3_comp_3rd_retread_acceptance" + brandChoiceID));

    
  }

  setLocalStorageValue(brandChoiceID)
  {
    localStorage.setItem("retread3_mich_price_of_new"+brandChoiceID,this.mich_price_of_new+"");;
    localStorage.setItem("retread3_mich_price_1st_retread"+brandChoiceID,this.mich_price_1st_retread + "");
    localStorage.setItem("retread3_mich_price_2nd_retread"+brandChoiceID,this.mich_price_2nd_retread+"");
    localStorage.setItem("retread3_mich_price_3rd_retread"+brandChoiceID,this.mich_price_3rd_retread+"");
    localStorage.setItem("retread3_mich_1st_retread_acceptance"+brandChoiceID,this.mich_1st_retread_acceptance+"");
    localStorage.setItem("retread3_mich_2nd_retread_acceptance"+brandChoiceID,this.mich_2nd_retread_acceptance+"");
    localStorage.setItem("retread3_mich_3rd_retread_acceptance"+brandChoiceID,this.mich_3rd_retread_acceptance+"");

    localStorage.setItem("retread3_comp_price_of_new"+brandChoiceID,this.comp_price_of_new+"");
    localStorage.setItem("retread3_comp_price_1st_retread"+brandChoiceID,this.comp_price_1st_retread+"");
    localStorage.setItem("retread3_comp_price_2nd_retread"+brandChoiceID,this.comp_price_2nd_retread+"");
    localStorage.setItem("retread3_comp_price_3rd_retread"+brandChoiceID,this.comp_price_3rd_retread+"");
    localStorage.setItem("retread3_comp_1st_retread_acceptance"+brandChoiceID,this.comp_1st_retread_acceptance+"");
    localStorage.setItem("retread3_comp_2nd_retread_acceptance"+brandChoiceID,this.comp_2nd_retread_acceptance+"");
    localStorage.setItem("retread3_comp_3rd_retread_acceptance"+brandChoiceID,this.comp_3rd_retread_acceptance+"");

    localStorage.setItem("retread3_brandChoice",brandChoiceID+"");
  }

  checkDeliveryDetail(){

    this.company = localStorage.getItem('company') ;
    this.addrees = localStorage.getItem('address1');
    this.customerCity = localStorage.getItem('customerCity');
    this.customerZipCode = localStorage.getItem('customerZipCode');
    this.customerName = localStorage.getItem('customerFullName');
    this.customerPhone = localStorage.getItem('customerPhone');
    this.userName = localStorage.getItem('userName');
    this.userEmail = localStorage.getItem('userEmail');
  
    if (this.company == "null" ) {
      this.company = "";
    }
    if (this.addrees == "null" ) {
      this.addrees = "";
    }
    if (this.customerCity == "null" ) {
      this.customerCity = "";
    }
    if (this.customerZipCode == "null" ) {
      this.customerZipCode = "";
    }
    if (this.customerName == "null" ) {
      this.customerName = "";
    }
    if (this.customerPhone == "null" ) {
      this.customerPhone = "";
    }
    if (this.userName == "null" ) {
      this.userName = "";
    }
    if (this.userEmail == "null" ) {
      this.userEmail = "";
    }
  }

  ionViewDidLoad() {

      
  }

  captureScreen()
  {
    // setTimeout(()=>{
    //   console.log('2');
    //   this.screenshot();
    
    // }, 20000);
  }

  

  brandViewShow_Retread_1()
  {
    if(!this.isBrandViewSelection_Retread_1)
    {
      console.log("---brandViewShow--");
      if(this.logoId_Retread_1 == 0)
        this.isBrandView_Retread_1 = 0;
      else if(this.logoId_Retread_1 == 1)
        this.isBrandView_Retread_1 = 1;
      else if(this.logoId_Retread_1 == 2)
        this.isBrandView_Retread_1 = 2;
      else if(this.logoId_Retread_1 == 3)
        this.isBrandView_Retread_1 = 3;
    }
    this.isBrandViewSelection_Retread_1 = false;
  }

  brandViewSelection_Retread_1(tmpLogoId)
  {
    if(tmpLogoId == 3 && this.logoId_Retread_2 == 2 && this.logoId_Retread_3 == 3 )
    {
      tmpLogoId = 2;
    }
    //alert(logoName);
    console.log("---brandViewSelection---");
    this.isBrandView_Retread_1 =-1;
    this.logoId_Retread_1 = tmpLogoId;
    this.isBrandViewSelection_Retread_1 = true;

    this.setBrandChoice();

    this.getLocalStorageValue(this.brandChoice);

    this.calculate_mich_avg_cost(5,null,false,"");

    this.calculate_comp_avg_cost(5,null,false,"");
    
  }


  brandViewShow_Retread_2()
  {
    if(!this.isBrandViewSelection_Retread_2)
    {
      console.log("---brandViewShow--");
      if(this.logoId_Retread_2 == 0)
        this.isBrandView_Retread_2 = 0;
      else if(this.logoId_Retread_2 == 1)
        this.isBrandView_Retread_2 = 1;
      else if(this.logoId_Retread_2 == 2)
        this.isBrandView_Retread_2 = 2;
      else if(this.logoId_Retread_2 == 3)
        this.isBrandView_Retread_2 = 3;
    }
    this.isBrandViewSelection_Retread_2 = false;
  }

  brandViewSelection_Retread_2(tmpLogoId)
  {
    if(this.logoId_Retread_1 == 3 && tmpLogoId ==2 && this.logoId_Retread_3 == 3 )
    {
      tmpLogoId = 3;
    }
    //alert(logoName);
    console.log("---brandViewSelection---");
    this.isBrandView_Retread_2 =-1;
    this.logoId_Retread_2 = tmpLogoId;
    this.isBrandViewSelection_Retread_2 = true;

    this.setBrandChoice();

    this.getLocalStorageValue(this.brandChoice);

    this.calculate_mich_avg_cost(5,null,false,"");

    this.calculate_comp_avg_cost(5,null,false,"");
    
  }

  brandViewShow_Retread_3()
  {
    if(!this.isBrandViewSelection_Retread_3)
    {
      console.log("---brandViewShow--");
      if(this.logoId_Retread_3 == 0)
        this.isBrandView_Retread_3 = 0;
      else if(this.logoId_Retread_3 == 1)
        this.isBrandView_Retread_3 = 1;
      else if(this.logoId_Retread_3 == 2)
        this.isBrandView_Retread_3 = 2;
      else if(this.logoId_Retread_3 == 3)
        this.isBrandView_Retread_3 = 3;
    }
    this.isBrandViewSelection_Retread_3 = false;
  }

  brandViewSelection_Retread_3(tmpLogoId)
  {
    //alert(logoName);
    if(tmpLogoId == 2)
    {
      tmpLogoId = 3;
    }
    console.log("---brandViewSelection---");
    this.isBrandView_Retread_3 =-1;
    this.logoId_Retread_3 = tmpLogoId;
    this.isBrandViewSelection_Retread_3 = true;

    this.setBrandChoice();

    this.getLocalStorageValue(this.brandChoice);

    this.calculate_mich_avg_cost(5,null,false,"");

    this.calculate_comp_avg_cost(5,null,false,"");
    
  }

  calculate_comp_avg_cost(indx,$event,percentageValidateFlag,name)
  {

    if(name == "comp_price_of_new")
    {
      this.comp_price_of_new = isNaN(parseFloat($event.replace(/,/g, ''))) ? 0 : parseFloat($event.replace(/,/g, ''));
    }

    if(name == "comp_price_1st_retread")
    {
      this.comp_price_1st_retread = isNaN(parseFloat($event.replace(/,/g, ''))) ? 0 : parseFloat($event.replace(/,/g, ''));
    }

    if(name == "comp_price_2nd_retread")
    {
      this.comp_price_2nd_retread = isNaN(parseFloat($event.replace(/,/g, ''))) ? 0 : parseFloat($event.replace(/,/g, ''));
    }

    if(name == "comp_price_3rd_retread")
    {
      this.comp_price_3rd_retread = isNaN(parseFloat($event.replace(/,/g, ''))) ? 0 : parseFloat($event.replace(/,/g, ''));
    }

    if(percentageValidateFlag)
    {
      this.validatePercentageRange($event,name);
    }


    let C12: number = 0;

    let E12: number = 0;
  
    let G12: number = 0;
  
    let I12: number = 0;
  
    let L12: number = 0;
  
    let N12: number = 0;
  
    let P12: number = 0;

    C12 = this.comp_price_of_new;

    E12 = this.comp_price_1st_retread;

    G12 = this.comp_price_2nd_retread;

    I12 = this.comp_price_3rd_retread;

    L12 = this.comp_1st_retread_acceptance/100;

    N12 = this.comp_2nd_retread_acceptance/100;

    P12 = this.comp_3rd_retread_acceptance/100;

    this.comp_avg_cost = (((C12+(C12*(1-L12))+(E12*L12))+(G12*(L12*N12))+(E12*((1-L12)*L12))+(C12*(1-((L12*N12)+((1-L12)*L12)))))+((I12*(L12*N12*P12))+(C12*((L12*N12)*(1-P12)))+(E12*((L12-(L12*N12))*L12))+(C12*((L12-(L12*N12))*(1-L12)))+(G12*(((1-L12)*L12)*N12))+(C12*(((1-L12)*L12)*(1-N12)))+(C12*((1-L12)*(1-L12)*(1-L12)))+(E12*(((1-L12)*L12)*(1-L12)))))/4;

    // this.comp_avg_cost_ui = Math.round(this.comp_avg_cost);

    // this.comp_avg_cost_ui = isNaN(parseFloat(this.comp_avg_cost_ui+"".replace(/,/g, ''))) ? 0 : parseFloat(this.comp_avg_cost_ui+"".replace(/,/g, ''));

    if(indx == 1)
    {
      this.calculate_pricegap_price_of_new();
      this.calculate_pricegap();
    }
    else if(indx == 2)
    {
      this.calculate_pricegap_price1stretread();
      this.calculate_pricegap();
    }
    else if(indx == 3)
    {
      this.calculate_pricegap_price2ndretread();
      this.calculate_pricegap();
    }
    else if(indx == 4)
    {
      this.calculate_pricegap_price3rdretread();
      this.calculate_pricegap();
    }
    else if(indx == 5)
    {
      this.calculate_pricegap_price_of_new();
      this.calculate_pricegap();

      this.calculate_pricegap_price1stretread();
      this.calculate_pricegap();

      this.calculate_pricegap_price2ndretread();
      this.calculate_pricegap();
      
      this.calculate_pricegap_price3rdretread();
      this.calculate_pricegap();

    }

    if(indx != 5)
    {
      this.setLocalStorageValue(this.brandChoice);
    }
    this.calculate_pricegap_avg_cost();

    // this.screenshot();
  }

  calculate_pricegap_price_of_new()
  {
    this.pricegap_price_of_new = this.mich_price_of_new - this.comp_price_of_new;

    this.pricegap_price_of_new_percentage = (this.pricegap_price_of_new / this.comp_price_of_new) * 100;

    this.pricegap_price_of_new_percentage = (!isFinite(this.pricegap_price_of_new_percentage) ) ? 0 : this.pricegap_price_of_new_percentage;

  }

  calculate_pricegap_price1stretread()
  {
    this.pricegap_price1st_retread = this.mich_price_1st_retread - this.comp_price_1st_retread;

    this.pricegap_price1st_retread_percentage = (this.pricegap_price1st_retread / this.comp_price_1st_retread) * 100;

    this.pricegap_price1st_retread_percentage = (!isFinite(this.pricegap_price1st_retread_percentage) ) ? 0 : this.pricegap_price1st_retread_percentage;

  }

  calculate_pricegap_price2ndretread()
  {
    this.pricegap_price2nd_retread = this.mich_price_2nd_retread - this.comp_price_2nd_retread;

    this.pricegap_price2nd_retread_percentage = (this.pricegap_price2nd_retread / this.comp_price_2nd_retread)*100;

    this.pricegap_price2nd_retread_percentage = (!isFinite(this.pricegap_price2nd_retread_percentage) ) ? 0 : this.pricegap_price2nd_retread_percentage;
    
  }

  calculate_pricegap_price3rdretread()
  {
    this.pricegap_price3rd_retread = this.mich_price_3rd_retread - this.comp_price_3rd_retread;

    this.pricegap_price3rd_retread_percentage = (this.pricegap_price3rd_retread / this.comp_price_3rd_retread) *100;

    this.pricegap_price3rd_retread_percentage = (!isFinite(this.pricegap_price3rd_retread_percentage) ) ? 0 : this.pricegap_price3rd_retread_percentage;    
  }

  calculate_pricegap_avg_cost()
  {
    this.pricegap_avg_cost = this.mich_avg_cost - this.comp_avg_cost;

    // this.pricegap_avg_cost_ui = Math.round(this.pricegap_avg_cost);

    this.pricegap_avg_cost_percentage = (this.pricegap_avg_cost / this.comp_avg_cost) * 100;

    this.pricegap_avg_cost_percentage = (!isFinite(this.pricegap_avg_cost_percentage) ) ? 0 : this.pricegap_avg_cost_percentage;    
  }

  calculate_pricegap()
  {
    this.pricegap = this.pricegap_price_of_new + this.pricegap_price1st_retread + this.pricegap_price2nd_retread + this.pricegap_price3rd_retread;
  }

  calculate_mich_avg_cost(indx,$event,percentageValidateFlag,name)
  {

    if(name == "mich_price_of_new")
    {
      this.mich_price_of_new = isNaN(parseFloat($event.replace(/,/g, ''))) ? 0 : parseFloat($event.replace(/,/g, ''));
    }

    if(name == "mich_price_1st_retread")
    {
      this.mich_price_1st_retread = isNaN(parseFloat($event.replace(/,/g, ''))) ? 0 : parseFloat($event.replace(/,/g, ''));
    }

    if(name == "mich_price_2nd_retread")
    {
      this.mich_price_2nd_retread = isNaN(parseFloat($event.replace(/,/g, ''))) ? 0 : parseFloat($event.replace(/,/g, ''));
    }

    if(name == "mich_price_3rd_retread")
    {
      this.mich_price_3rd_retread = isNaN(parseFloat($event.replace(/,/g, ''))) ? 0 : parseFloat($event.replace(/,/g, ''));
    }
      


    if(percentageValidateFlag)
    {
      this.validatePercentageRange($event,name);
    }

    let C11: number = 0;

    let E11: number = 0;
  
    let G11: number = 0;
  
    let I11: number = 0;
  
    let L11: number = 0;
  
    let N11: number = 0;
  
    let P11: number = 0;

    C11 = this.mich_price_of_new;

    E11 = this.mich_price_1st_retread;

    G11 = this.mich_price_2nd_retread;

    I11 = this.mich_price_3rd_retread;

    L11 = this.mich_1st_retread_acceptance/100;

    N11 = this.mich_2nd_retread_acceptance/100;

    P11 = this.mich_3rd_retread_acceptance/100;

    this.mich_avg_cost = (((C11+(C11*(1-L11))+(E11*L11))+(G11*(L11*N11))+(E11*((1-L11)*L11))+(C11*(1-((L11*N11)+((1-L11)*L11)))))+((I11*(L11*N11*P11))+(C11*((L11*N11)*(1-P11)))+(E11*((L11-(L11*N11))*L11))+(C11*((L11-(L11*N11))*(1-L11)))+(G11*(((1-L11)*L11)*N11))+(C11*(((1-L11)*L11)*(1-N11)))+(C11*((1-L11)*(1-L11)*(1-L11)))+(E11*(((1-L11)*L11)*(1-L11)))))/4;

    // this.mich_avg_cost_ui = Math.round(this.mich_avg_cost);

    // this.mich_avg_cost_ui = isNaN(parseFloat(this.mich_avg_cost_ui+"".replace(/,/g, ''))) ? 0 : parseFloat(this.mich_avg_cost_ui+"".replace(/,/g, ''));

    if(indx == 1)
    {
      this.calculate_pricegap_price_of_new();
      this.calculate_pricegap();
    }
    else if(indx == 2)
    {
      this.calculate_pricegap_price1stretread();
      this.calculate_pricegap();
    }
    else if(indx == 3)
    {
      this.calculate_pricegap_price2ndretread();
      this.calculate_pricegap();
    }
    else if(indx == 4)
    {
      this.calculate_pricegap_price3rdretread();
      this.calculate_pricegap();
    }
    else if(indx == 5)
    {
      this.calculate_pricegap_price_of_new();
      this.calculate_pricegap();

      this.calculate_pricegap_price1stretread();
      this.calculate_pricegap();

      this.calculate_pricegap_price2ndretread();
      this.calculate_pricegap();

      this.calculate_pricegap_price3rdretread();
      this.calculate_pricegap();
    }

    if(indx != 5)
    {
      this.setLocalStorageValue(this.brandChoice);
    }

    this.calculate_pricegap_avg_cost();

    // this.screenshot();

  }

  validatePercentageRange($event,name)
  {
    
    if(name == "mich_1st_retread_acceptance") {

      if(this.mich_1st_retread_acceptance > 100 || this.mich_1st_retread_acceptance < 0){
        
          var tempObj = this;

          // var render = this.renderer;
         
          this.mich_1st_retread_acceptance = 0;
          var fn = function(){
            tempObj.mich_1st_retread_acceptance = 0;
            //alert("focus1");
            // const element = render.selectRootElement('#input1');

            // setTimeout(() => element.select(), 0);
          }
  
          this.dataRangeService.handValueOutOfRangeErrorMessage(fn);

          //alert("focus");
          
      }
     
    }

    if(name == "mich_2nd_retread_acceptance") {

      if(this.mich_2nd_retread_acceptance > 100 || this.mich_2nd_retread_acceptance < 0){
        
          var tempObj1 = this;
         
          this.mich_2nd_retread_acceptance = 0;
          var fn1 = function(){
            tempObj1.mich_2nd_retread_acceptance = 0;
            
          }
  
          this.dataRangeService.handValueOutOfRangeErrorMessage(fn1);
      }
     
    }

    if(name == "mich_3rd_retread_acceptance") {

      if(this.mich_3rd_retread_acceptance > 100 || this.mich_3rd_retread_acceptance < 0){
        
          var tempObj2 = this;
         
          this.mich_3rd_retread_acceptance = 0;
          var fn2 = function(){
            tempObj2.mich_3rd_retread_acceptance = 0;
            
          }
  
          this.dataRangeService.handValueOutOfRangeErrorMessage(fn2);
      }
      
    }

    if(name == "comp_1st_retread_acceptance") {

      if(this.comp_1st_retread_acceptance > 100 || this.comp_1st_retread_acceptance < 0){
        
          var tempObj3 = this;
          
          this.comp_1st_retread_acceptance = 0;
          var fn3 = function(){
            tempObj3.comp_1st_retread_acceptance = 0;
            
          }
  
          this.dataRangeService.handValueOutOfRangeErrorMessage(fn3);
      }
     
    }

    if(name == "comp_2nd_retread_acceptance") {

      if(this.comp_2nd_retread_acceptance> 100 || this.comp_2nd_retread_acceptance < 0){
        
          var tempObj4 = this;
          
          this.comp_2nd_retread_acceptance = 0;
          var fn4 = function(){
            tempObj4.comp_2nd_retread_acceptance = 0;
            
          }
  
          this.dataRangeService.handValueOutOfRangeErrorMessage(fn4);
      }
     
    }


    if(name == "comp_3rd_retread_acceptance") {

      if(this.comp_3rd_retread_acceptance > 100 || this.comp_3rd_retread_acceptance < 0){
        
          var tempObj5 = this;
         
          this.comp_3rd_retread_acceptance = 0;
          var fn5 = function(){
            tempObj5.comp_3rd_retread_acceptance = 0;
            
          }
  
          this.dataRangeService.handValueOutOfRangeErrorMessage(fn5);
      }
     
    }

   
  }
  
  setBrandChoice()
  {
    
   // M * R * R * L -> 1; M * R * L * L -> 2; M * L * L * L -> 3

    if(this.logoId_Retread_1 ==  2 && this.logoId_Retread_2 == 2 && this.logoId_Retread_3 == 3)
    {
      this.brandChoice = 1;
    }
    else if(this.logoId_Retread_1 == 2 && this.logoId_Retread_2 == 3 && this.logoId_Retread_3 == 3)
    {
      this.brandChoice = 2;
    }
    else if(this.logoId_Retread_1 == 3 && this.logoId_Retread_2 == 3 && this.logoId_Retread_3 == 3)
    {
      this.brandChoice = 3;
    }
  }


  openNext(){
    this.navCtrl.push(HelpPage);
  }

  ionViewWillLeave(){

    this.screenshot();

  }

  screenshot(){
    var useHeight = document.getElementById('retreads3').scrollHeight;
    var useWidth = document.getElementById('retreads3').scrollWidth;
    
    
    html2canvas(document.getElementById("retreads3"), {width: useWidth, height: useHeight * 1.5}).then
    (function(canvas) {
        var imgData = canvas.toDataURL(
            'image/png');
        localStorage.setItem('retreads3', imgData);
        
    });
  }
  

}
