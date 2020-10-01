import { Component , ViewChild} from '@angular/core';
import {IonicPage,Navbar ,AlertController, NavController, NavParams} from 'ionic-angular';
import {JsonData} from '../../providers/json-data'
import {TranslateService} from "@ngx-translate/core";
import {Storage} from "@ionic/storage";
import { HelpPage } from '../help/help';
import {DataRangeValidationService} from "../../providers/dataRangeValidationService";
import { HomePage } from '../home/home';
// import * as html2canvas from '../../html2canvas.js';
import * as html2canvas from 'html2canvas';
import { FontadjustmentProvider } from '../../providers/fontadjustment/fontadjustment';


@IonicPage()
@Component({
  selector: 'page-retreads1',
  templateUrl: 'retreads1.html'
})
export class Retread1Page {
    @ViewChild(Navbar) navBar:Navbar;
    
    currency="EUR";
  isBrandView_Retread_1 : number = -1;

  logoId_Retread_1:number = 2;

  isBrandViewSelection_Retread_1:boolean=false;

  mich_price_of_new:number=0;

  mich_price_1st_retread:number = 0;

  
  mich_1st_retread_acceptance: number = 0;

  mich_avg_cost : number = 0;


  comp_price_of_new:number = 0;

  comp_price_1st_retread:number = 0;

  comp_1st_retread_acceptance: number = 0;

  comp_avg_cost : number = 0;

  pricegap_price_of_new : number = 0;

  pricegap_price1st_retread : number = 0;

  pricegap_price_of_new_percentage : number = 0;

  pricegap_price1st_retread_percentage : number = 0;

  pricegap_avg_cost : number =0;

  pricegap_avg_cost_percentage : number =0;

  pricegap : number = 0;

  brandChoice : number = 2;  // 2 - Remix ; 3 - Laurent

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
  
    

  constructor(public fontAdjustmentService: FontadjustmentProvider,public navCtrl: NavController, public jsonData :JsonData, public storage : Storage,
    public tranlateService:TranslateService, navParams :NavParams, public alertCtrl:AlertController,
    public dataRangeService: DataRangeValidationService) {
      
      if (localStorage.getItem("selectedCurrency") != null && localStorage.getItem("selectedCurrency") != undefined) {
        this.currency = localStorage.getItem(localStorage.getItem("selectedCurrency"));
      }
      //this.brandChoice = localStorage.getItem("retread1_brandChoice") == null ? 2 : parseInt(localStorage.getItem("retread1_brandChoice"));

      //alert(this.brandChoice);

      this.getLocalStorageValue(this.brandChoice);

      this.calculate_mich_avg_cost(5,null,false,"");
  
      this.calculate_comp_avg_cost(5,null,false,"");

      this.checkDeliveryDetail();
      
      

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
  
    getLocalStorageValue(brandChoiceID)
    {
      this.mich_price_of_new = localStorage.getItem("retread1_mich_price_of_new" +brandChoiceID) == null ? 0 : parseInt(localStorage.getItem("retread1_mich_price_of_new"+brandChoiceID));
      this.mich_price_1st_retread = localStorage.getItem("retread1_mich_price_1st_retread" +brandChoiceID ) == null ? 0 : parseInt(localStorage.getItem("retread1_mich_price_1st_retread"+brandChoiceID));
      this.mich_1st_retread_acceptance = localStorage.getItem("retread1_mich_1st_retread_acceptance" + brandChoiceID) == null ? 0 : parseInt(localStorage.getItem("retread1_mich_1st_retread_acceptance"+brandChoiceID));
        
  
      this.comp_price_of_new = localStorage.getItem("retread1_comp_price_of_new" + brandChoiceID) == null ? 0 : parseInt(localStorage.getItem("retread1_comp_price_of_new"+brandChoiceID));
      this.comp_price_1st_retread = localStorage.getItem("retread1_comp_price_1st_retread" + brandChoiceID) == null ? 0 : parseInt(localStorage.getItem("retread1_comp_price_1st_retread"+brandChoiceID));
      this.comp_1st_retread_acceptance = localStorage.getItem("retread1_comp_1st_retread_acceptance" + brandChoiceID) == null ? 0 : parseInt(localStorage.getItem("retread1_comp_1st_retread_acceptance"+brandChoiceID));
            
    }
  
    setLocalStorageValue(brandChoiceID)
    {
      //alert("chk = " + brandChoiceID);
      localStorage.setItem("retread1_mich_price_of_new" + brandChoiceID,this.mich_price_of_new+"");;
      localStorage.setItem("retread1_mich_price_1st_retread" + brandChoiceID,this.mich_price_1st_retread + "");
      localStorage.setItem("retread1_mich_1st_retread_acceptance" + brandChoiceID,this.mich_1st_retread_acceptance+"");
        
      localStorage.setItem("retread1_comp_price_of_new" + brandChoiceID,this.comp_price_of_new+"");
      localStorage.setItem("retread1_comp_price_1st_retread" + brandChoiceID,this.comp_price_1st_retread+"");
      localStorage.setItem("retread1_comp_1st_retread_acceptance" + brandChoiceID,this.comp_1st_retread_acceptance+"");

      localStorage.setItem("retread1_brandChoice",brandChoiceID+"");
            
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

    if(name == "mich_1st_retread_acceptance")
    {
      if(this.mich_1st_retread_acceptance == 0)
        this.mich_1st_retread_acceptance = parseInt("");
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

    if(name == "comp_1st_retread_acceptance")
    {
      if(this.comp_1st_retread_acceptance == 0)
        this.comp_1st_retread_acceptance = parseInt("");
    }

  }

  captureScreen()
  {
    setTimeout(()=>{
      console.log('2');
      this.screenshot();
    
    }, 20000);
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

    
    if(percentageValidateFlag)
    {
      this.validatePercentageRange($event,name);
    }

    let D12: number = 0;

    let F12: number = 0;
  
    let K12: number = 0;
  
    D12 = this.comp_price_of_new;

    F12 = this.comp_price_1st_retread;

    K12 = this.comp_1st_retread_acceptance/100;

        
    this.comp_avg_cost = (D12+(D12*(1-K12))+(F12*K12))/2;

    // this.comp_avg_cost_ui = Math.round(this.comp_avg_cost);

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
    else if(indx == 5)
    {
      this.calculate_pricegap_price_of_new();
      this.calculate_pricegap();

      this.calculate_pricegap_price1stretread();
      this.calculate_pricegap();

    }
    
    if(indx != 5)
    {
      this.setLocalStorageValue(this.brandChoice);
    }

    this.calculate_pricegap_avg_cost();

    // if(indx != 5)
    // {
    //   setTimeout(()=>{
    //     console.log('2');
    //     this.screenshot();
      
    //   }, 2000);
            
    // }

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

  
  calculate_pricegap_avg_cost()
  {
    this.pricegap_avg_cost = this.mich_avg_cost - this.comp_avg_cost;

    // this.pricegap_avg_cost_ui = Math.round(this.pricegap_avg_cost);

    this.pricegap_avg_cost_percentage = (this.pricegap_avg_cost / this.comp_avg_cost) * 100;

    this.pricegap_avg_cost_percentage = (!isFinite(this.pricegap_avg_cost_percentage) ) ? 0 : this.pricegap_avg_cost_percentage; 
  }

  calculate_pricegap()
  {
    this.pricegap = this.pricegap_price_of_new + this.pricegap_price1st_retread;
  }

 calculate_mich_avg_cost(indx,$event,percentageValidateFlag,name)
  {
    if(name == "mich_price_of_new")
    {
      // alert(this.mich_price_of_new);
      this.mich_price_of_new = isNaN(parseFloat($event.replace(/,/g, ''))) ? 0 : parseFloat($event.replace(/,/g, ''));
      // alert(this.mich_price_of_new);
    }

    if(name == "mich_price_1st_retread")
    {
      this.mich_price_1st_retread = isNaN(parseFloat($event.replace(/,/g, ''))) ? 0 : parseFloat($event.replace(/,/g, ''));
    }

   
    if(percentageValidateFlag)
    {
      this.validatePercentageRange($event,name);
    }
    let D11: number = 0;

    let F11: number = 0;
  
    let K11: number = 0;
  
    
    D11 = this.mich_price_of_new;

    F11 = this.mich_price_1st_retread;

    K11 = this.mich_1st_retread_acceptance/100;

    
    this.mich_avg_cost = (D11+(D11*(1-K11))+(F11*K11))/2;
    
    // this.mich_avg_cost_ui = Math.round(this.mich_avg_cost);

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
    else if(indx == 5)
    {
      this.calculate_pricegap_price_of_new();
      this.calculate_pricegap();

      this.calculate_pricegap_price1stretread();
      this.calculate_pricegap();

    }

    if(indx != 5)
    {
      this.setLocalStorageValue(this.brandChoice);
    }
    
    
    this.calculate_pricegap_avg_cost();

    // if(indx != 5)
    // {
    //   setTimeout(()=>{
    //     console.log('2');
    //     this.screenshot();
      
    //   }, 2000);
            
    // }

  }

  ionViewDidLoad() {

      
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
    //alert(logoName);
    console.log("---brandViewSelection---");
    this.isBrandView_Retread_1 =-1;
    this.logoId_Retread_1 = tmpLogoId;
    this.brandChoice = tmpLogoId;
    this.isBrandViewSelection_Retread_1 = true;

    this.getLocalStorageValue(this.brandChoice);

    this.calculate_mich_avg_cost(5,null,false,"");

    this.calculate_comp_avg_cost(5,null,false,"");
    
  }


  
  validatePercentageRange($event,name)
  {
    
    if(name == "mich_1st_retread_acceptance") {

      if(this.mich_1st_retread_acceptance > 100 || this.mich_1st_retread_acceptance < 0){
        
          var tempObj = this;
         
          this.mich_1st_retread_acceptance = 0;
          var fn = function(){
            tempObj.mich_1st_retread_acceptance = 0;
          }
  
          this.dataRangeService.handValueOutOfRangeErrorMessage(fn);
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

   
  }
  

  openNext(){
    this.navCtrl.push(HelpPage);
  }

  ionViewWillLeave(){

    this.screenshot();
  

  }


  
  screenshot(){
    var useHeight = document.getElementById('retread1').scrollHeight;
    var useWidth = document.getElementById('retread1').scrollWidth;
    // var tempSummaryObj = this;
    
    
    html2canvas(document.getElementById("retread1"), {width: useWidth, height: useHeight * 1.5}).then
    (function(canvas) {
        var imgData = canvas.toDataURL(
            'image/png');
        localStorage.setItem('retread1', imgData);
       
        
    });

    
  }
}
