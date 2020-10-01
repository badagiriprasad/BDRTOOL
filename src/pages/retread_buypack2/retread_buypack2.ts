import { Component, ViewChild } from '@angular/core';
import { IonicPage, Navbar, AlertController, NavController, NavParams } from 'ionic-angular';
import { JsonData } from '../../providers/json-data'
import { TranslateService } from "@ngx-translate/core";
import { Storage } from "@ionic/storage";
import { HelpPage } from '../help/help';
import { DataRangeValidationService } from "../../providers/dataRangeValidationService";
import { HomePage } from '../home/home';
// import * as html2canvas from '../../html2canvas.js';

import * as html2canvas from 'html2canvas';
import { FontadjustmentProvider } from '../../providers/fontadjustment/fontadjustment';


@IonicPage()
@Component({
  selector: 'page-retread_buypack2',
  templateUrl: 'retread_buypack2.html'
})
export class RetreadBuyPack2Page {
  @ViewChild(Navbar) navBar: Navbar;


  isBrandView_Retread_1: number = -1;

  logoId_Retread_1: number = 2;

  isBrandViewSelection_Retread_1: boolean = false;

  isBrandView_Retread_2: number = -1;

  logoId_Retread_2: number = 3;

  isBrandViewSelection_Retread_2: boolean = false;

  mich_price_of_new: number = 0;

  mich_price_1st_retread: number = 0;

  mich_price_2nd_retread: number = 0;

  mich_1st_retread_acceptance: number = 0;

  mich_2nd_retread_acceptance: number = 0;

  mich_avg_cost: number = 0;

  comp_price_of_new: number = 0;

  comp_buy_pack_price: number = 0;

  comp_buy_pack_acceptance: number = 0;

  comp_avg_cost: number = 0;

  pricegap_price_of_new: number = 0;

  pricegap_price_of_new_percentage: number = 0;

  pricegap_avg_cost: number = 0;

  pricegap_avg_cost_percentage: number = 0;

  pricegap: number = 0;

  brandChoice: number = 1; // M * R * L -> 1 ;   M * R * R -> 2 ;   M * L * L -> 3

  // mich_avg_cost_ui : number = 0;

  // comp_avg_cost_ui : number = 0;

  // pricegap_avg_cost_ui : number =0;

  public date: any = new Date().toISOString();
  company = "";
  addrees = "";
  customerCity = "";
  customerZipCode = "";
  customerName = "";
  customerPhone = "";
  userName = "";
  userEmail = "";

  perceived_gap_with_buyback_price = 0;

  currencyName = 'USD';

  currency = "EUR";
  constructor(public fontAdjustmentService: FontadjustmentProvider, public navCtrl: NavController, public jsonData: JsonData, public storage: Storage,
    public tranlateService: TranslateService, navParams: NavParams, public alertCtrl: AlertController, public dataRangeService: DataRangeValidationService) {

    this.getLocalStorageValue(this.brandChoice);

    this.calculate_mich_avg_cost(5, null, false, "");

    this.calculate_comp_avg_cost(5, null, false, "");

    this.checkDeliveryDetail();
    if (localStorage.getItem("selectedCurrency") != null && localStorage.getItem("selectedCurrency") != undefined) {
      this.currency = localStorage.getItem(localStorage.getItem("selectedCurrency"));
    }


  }

  focusValue(name) {
    if (name == "mich_price_of_new") {
      if (this.mich_price_of_new == 0)
        this.mich_price_of_new = parseInt("");
    }

    if (name == "mich_price_1st_retread") {
      if (this.mich_price_1st_retread == 0)
        this.mich_price_1st_retread = parseInt("");
    }

    if (name == "mich_price_2nd_retread") {
      if (this.mich_price_2nd_retread == 0)
        this.mich_price_2nd_retread = parseInt("");
    }

    if (name == "mich_1st_retread_acceptance") {
      if (this.mich_1st_retread_acceptance == 0)
        this.mich_1st_retread_acceptance = parseInt("");
    }

    if (name == "mich_2nd_retread_acceptance") {
      if (this.mich_2nd_retread_acceptance == 0)
        this.mich_2nd_retread_acceptance = parseInt("");
    }

    if (name == "comp_price_of_new") {
      if (this.comp_price_of_new == 0)
        this.comp_price_of_new = parseInt("");
    }

    if (name == "comp_buy_pack_price") {
      if (this.comp_buy_pack_price == 0)
        this.comp_buy_pack_price = parseInt("");
    }

    if (name == "comp_buy_pack_acceptance") {
      if (this.comp_buy_pack_acceptance == 0)
        this.comp_buy_pack_acceptance = parseInt("");
    }

  }


  openHomePage() {

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

  checkDeliveryDetail() {

    this.company = localStorage.getItem('company');
    this.addrees = localStorage.getItem('address1');
    this.customerCity = localStorage.getItem('customerCity');
    this.customerZipCode = localStorage.getItem('customerZipCode');
    this.customerName = localStorage.getItem('customerFullName');
    this.customerPhone = localStorage.getItem('customerPhone');
    this.userName = localStorage.getItem('userName');
    this.userEmail = localStorage.getItem('userEmail');

    if (this.company == "null") {
      this.company = "";
    }
    if (this.addrees == "null") {
      this.addrees = "";
    }
    if (this.customerCity == "null") {
      this.customerCity = "";
    }
    if (this.customerZipCode == "null") {
      this.customerZipCode = "";
    }
    if (this.customerName == "null") {
      this.customerName = "";
    }
    if (this.customerPhone == "null") {
      this.customerPhone = "";
    }
    if (this.userName == "null") {
      this.userName = "";
    }
    if (this.userEmail == "null") {
      this.userEmail = "";
    }
  }

  getLocalStorageValue(brandChoiceID) {
    this.mich_price_of_new = localStorage.getItem("retread_buypack2_mich_price_of_new" + brandChoiceID) == null ? 0 : parseInt(localStorage.getItem("retread_buypack2_mich_price_of_new" + brandChoiceID));
    this.mich_price_1st_retread = localStorage.getItem("retread_buypack2_mich_price_1st_retread" + brandChoiceID) == null ? 0 : parseInt(localStorage.getItem("retread_buypack2_mich_price_1st_retread" + brandChoiceID));
    this.mich_price_2nd_retread = localStorage.getItem("retread_buypack2_mich_price_2nd_retread" + brandChoiceID) == null ? 0 : parseInt(localStorage.getItem("retread_buypack2_mich_price_2nd_retread" + brandChoiceID));
    this.mich_1st_retread_acceptance = localStorage.getItem("retread_buypack2_mich_1st_retread_acceptance" + brandChoiceID) == null ? 0 : parseInt(localStorage.getItem("retread_buypack2_mich_1st_retread_acceptance" + brandChoiceID));
    this.mich_2nd_retread_acceptance = localStorage.getItem("retread_buypack2_mich_2nd_retread_acceptance" + brandChoiceID) == null ? 0 : parseInt(localStorage.getItem("retread_buypack2_mich_2nd_retread_acceptance" + brandChoiceID));

    this.comp_price_of_new = localStorage.getItem("retread_buypack2_comp_price_of_new" + brandChoiceID) == null ? 0 : parseInt(localStorage.getItem("retread_buypack2_comp_price_of_new" + brandChoiceID));
    this.comp_buy_pack_price = localStorage.getItem("retread_buypack2_comp_buy_pack_price" + brandChoiceID) == null ? 0 : parseInt(localStorage.getItem("retread_buypack2_comp_buy_pack_price" + brandChoiceID));

    this.perceived_gap_with_buyback_price = localStorage.getItem("retread_buypack2_comp_perceived_gap_with_buyback_price" + brandChoiceID) == null ? 0 : parseInt(localStorage.getItem("retread_buypack2_comp_perceived_gap_with_buyback_price" + brandChoiceID));

    this.comp_buy_pack_acceptance = localStorage.getItem("retread_buypack2_comp_buy_pack_acceptance" + brandChoiceID) == null ? 0 : parseInt(localStorage.getItem("retread_buypack2_comp_buy_pack_acceptance" + brandChoiceID));

  }

  setLocalStorageValue(brandChoiceID) {
    localStorage.setItem("retread_buypack2_mich_price_of_new" + brandChoiceID, this.mich_price_of_new + "");;
    localStorage.setItem("retread_buypack2_mich_price_1st_retread" + brandChoiceID, this.mich_price_1st_retread + "");
    localStorage.setItem("retread_buypack2_mich_price_2nd_retread" + brandChoiceID, this.mich_price_2nd_retread + "");
    localStorage.setItem("retread_buypack2_mich_1st_retread_acceptance" + brandChoiceID, this.mich_1st_retread_acceptance + "");
    localStorage.setItem("retread_buypack2_mich_2nd_retread_acceptance" + brandChoiceID, this.mich_2nd_retread_acceptance + "");

    localStorage.setItem("retread_buypack2_comp_price_of_new" + brandChoiceID, this.comp_price_of_new + "");
    localStorage.setItem("retread_buypack2_comp_buy_pack_price" + brandChoiceID, this.comp_buy_pack_price + "");
    localStorage.setItem("retread_buypack2_comp_perceived_gap_with_buyback_price" + brandChoiceID, this.perceived_gap_with_buyback_price + "");
    localStorage.setItem("retread_buypack2_comp_buy_pack_acceptance" + brandChoiceID, this.comp_buy_pack_acceptance + "");

  }


  ionViewDidLoad() {


  }

  calculate_pricegap_avg_cost() {
    this.pricegap_avg_cost = this.mich_avg_cost - this.comp_avg_cost;

    // this.pricegap_avg_cost_ui = Math.round(this.pricegap_avg_cost);

    this.pricegap_avg_cost_percentage = (this.pricegap_avg_cost / this.comp_avg_cost) * 100;

    this.pricegap_avg_cost_percentage = (!isFinite(this.pricegap_avg_cost_percentage)) ? 0 : this.pricegap_avg_cost_percentage;
  }

  calculate_pricegap_price_of_new() {
    this.pricegap_price_of_new = this.mich_price_of_new - (this.comp_price_of_new)

    this.pricegap_price_of_new_percentage = ((this.mich_price_of_new - this.comp_price_of_new) / this.comp_price_of_new) * 100;

    this.pricegap_price_of_new_percentage = (!isFinite(this.pricegap_price_of_new_percentage)) ? 0 : this.pricegap_price_of_new_percentage;
  }

  calculate_comp_avg_cost(indx, $event, percentageValidateFlag, name) {

    if (name == "comp_price_of_new") {
      this.comp_price_of_new = isNaN(parseFloat($event.replace(/,/g, ''))) ? 0 : parseFloat($event.replace(/,/g, ''));
    }

    if (name == "comp_buy_pack_price") {
      this.comp_buy_pack_price = isNaN(parseFloat($event.replace(/,/g, ''))) ? 0 : parseFloat($event.replace(/,/g, ''));
      this.perceived_gap_with_buyback_price = this.pricegap_price_of_new + this.comp_buy_pack_price;
      console.log(this.perceived_gap_with_buyback_price);
    }


    if (percentageValidateFlag) {
      this.validatePercentageRange($event, name);
    }

    let D13: number = 0;
    let K13: number = 0;
    let F13: number = 0;

    D13 = this.comp_price_of_new;
    K13 = this.comp_buy_pack_acceptance / 100;
    F13 = this.comp_buy_pack_price;

    this.comp_avg_cost = ((2 * D13) - (2 * (K13 * F13))) / 2;

    // this.comp_avg_cost_ui = Math.round(this.comp_avg_cost);

    if (indx == 1 || indx == 5) {
      this.calculate_pricegap_price_of_new();
    }

    if (indx != 5) {
      this.setLocalStorageValue(this.brandChoice);
    }

    this.calculate_pricegap_avg_cost();

    // this.screenshot();

  }

  calculate_mich_avg_cost(indx, $event, percentageValidateFlag, name) {

    if (name == "mich_price_of_new") {
      this.mich_price_of_new = isNaN(parseFloat($event.replace(/,/g, ''))) ? 0 : parseFloat($event.replace(/,/g, ''));
    }

    if (name == "mich_price_1st_retread") {
      this.mich_price_1st_retread = isNaN(parseFloat($event.replace(/,/g, ''))) ? 0 : parseFloat($event.replace(/,/g, ''));
    }

    if (name == "mich_price_2nd_retread") {
      this.mich_price_2nd_retread = isNaN(parseFloat($event.replace(/,/g, ''))) ? 0 : parseFloat($event.replace(/,/g, ''));
    }


    if (percentageValidateFlag) {
      this.validatePercentageRange($event, name);
    }
    let D11: number = 0;
    let K11: number = 0;
    let F11: number = 0;
    let H11: number = 0;
    let M11: number = 0;

    D11 = this.mich_price_of_new;
    F11 = this.mich_price_1st_retread;
    H11 = this.mich_price_2nd_retread;
    K11 = this.mich_1st_retread_acceptance / 100;
    M11 = this.mich_2nd_retread_acceptance / 100;


    this.mich_avg_cost = ((D11 + (D11 * (1 - K11)) + (F11 * K11)) + (H11 * (K11 * M11)) + (F11 * ((1 - K11) * K11)) + (D11 * (1 - ((K11 * M11) + ((1 - K11) * K11))))) / 3;

    // this.mich_avg_cost_ui = Math.round(this.mich_avg_cost);

    if (indx == 1 || indx == 5) {
      this.calculate_pricegap_price_of_new();
    }

    if (indx != 5) {
      this.setLocalStorageValue(this.brandChoice);
    }

    this.calculate_pricegap_avg_cost();
    // this.screenshot();
  }

  brandViewShow_Retread_1() {
    if (!this.isBrandViewSelection_Retread_1) {
      console.log("---brandViewShow--");
      if (this.logoId_Retread_1 == 0)
        this.isBrandView_Retread_1 = 0;
      else if (this.logoId_Retread_1 == 1)
        this.isBrandView_Retread_1 = 1;
      else if (this.logoId_Retread_1 == 2)
        this.isBrandView_Retread_1 = 2;
      else if (this.logoId_Retread_1 == 3)
        this.isBrandView_Retread_1 = 3;
    }
    this.isBrandViewSelection_Retread_1 = false;
  }

  brandViewSelection_Retread_1(tmpLogoId) {
    //alert(logoName);

    if (this.logoId_Retread_2 == 2 && tmpLogoId == 3) {
      tmpLogoId = 2;
    }

    console.log("---brandViewSelection---");
    this.isBrandView_Retread_1 = -1;
    this.logoId_Retread_1 = tmpLogoId;
    this.isBrandViewSelection_Retread_1 = true;

    this.setBrandChoice();

    this.getLocalStorageValue(this.brandChoice);

    this.calculate_mich_avg_cost(5, null, false, "");

    this.calculate_comp_avg_cost(5, null, false, "");

  }


  brandViewShow_Retread_2() {
    if (!this.isBrandViewSelection_Retread_2) {
      console.log("---brandViewShow--");
      if (this.logoId_Retread_2 == 0)
        this.isBrandView_Retread_2 = 0;
      else if (this.logoId_Retread_2 == 1)
        this.isBrandView_Retread_2 = 1;
      else if (this.logoId_Retread_2 == 2)
        this.isBrandView_Retread_2 = 2;
      else if (this.logoId_Retread_2 == 3)
        this.isBrandView_Retread_2 = 3;
    }
    this.isBrandViewSelection_Retread_2 = false;
  }

  brandViewSelection_Retread_2(tmpLogoId) {
    //alert(logoName);
    if (this.logoId_Retread_1 == 3) {
      tmpLogoId = 3;
    }

    console.log("---brandViewSelection---");
    this.isBrandView_Retread_2 = -1;
    this.logoId_Retread_2 = tmpLogoId;
    this.isBrandViewSelection_Retread_2 = true;



    this.setBrandChoice();

    this.getLocalStorageValue(this.brandChoice);

    this.calculate_mich_avg_cost(5, null, false, "");

    this.calculate_comp_avg_cost(5, null, false, "");

  }

  validatePercentageRange($event, name) {

    if (name == "mich_1st_retread_acceptance") {

      if (this.mich_1st_retread_acceptance > 100 || this.mich_1st_retread_acceptance < 0) {

        var tempObj = this;

        this.mich_1st_retread_acceptance = 0;
        var fn = function () {
          tempObj.mich_1st_retread_acceptance = 0;
        }

        this.dataRangeService.handValueOutOfRangeErrorMessage(fn);
      }

    }

    if (name == "mich_2nd_retread_acceptance") {

      if (this.mich_2nd_retread_acceptance > 100 || this.mich_2nd_retread_acceptance < 0) {

        var tempObj1 = this;

        this.mich_2nd_retread_acceptance = 0;
        var fn1 = function () {
          tempObj1.mich_2nd_retread_acceptance = 0;

        }

        this.dataRangeService.handValueOutOfRangeErrorMessage(fn1);
      }

    }


    if (name == "comp_buy_pack_acceptance") {

      if (this.comp_buy_pack_acceptance > 100 || this.comp_buy_pack_acceptance < 0) {

        var tempObj3 = this;

        this.comp_buy_pack_acceptance = 0;
        var fn3 = function () {
          tempObj3.comp_buy_pack_acceptance = 0;

        }

        this.dataRangeService.handValueOutOfRangeErrorMessage(fn3);
      }

    }

  }


  setBrandChoice() {
    // M * R * L -> 1 ;   M * R * R -> 2 ;   M * L * L -> 3
    if (this.logoId_Retread_1 == 2 && this.logoId_Retread_2 == 3) {
      this.brandChoice = 1;
    }
    else if (this.logoId_Retread_1 == 2 && this.logoId_Retread_2 == 2) {
      this.brandChoice = 2;
    }
    else if (this.logoId_Retread_1 == 3 && this.logoId_Retread_2 == 3) {
      this.brandChoice = 3;
    }
  }





  openNext() {
    this.navCtrl.push(HelpPage);
  }

  ionViewWillLeave() {

    this.screenshot();


  }

  captureScreen() {
    // setTimeout(()=>{
    //   console.log('2');
    //   this.screenshot();

    // }, 20000);
  }

  screenshot() {
    var useHeight = document.getElementById('retread_buypack2').scrollHeight;
    var useWidth = document.getElementById('retread_buypack2').scrollWidth;


    html2canvas(document.getElementById("retread_buypack2"), { width: useWidth, height: useHeight * 1.5 }).then
      (function (canvas) {
        var imgData = canvas.toDataURL(
          'image/png');
        localStorage.setItem('retread_buypack2', imgData);

      });
  }


}
