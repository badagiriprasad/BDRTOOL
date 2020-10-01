import { Component ,ViewChild} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ViewController} from 'ionic-angular';
// import {ViewChild} from "../../../node_modules/@angular/core/src/metadata/di";
//import {Http, Response} from '@angular/http'
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the AutocompletePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-autocomplete-page',
  templateUrl: 'autocomplete-page.html'
})
export class AutocompletePagePage {
  autocompleteItems;
  autocomplete;
  @ViewChild('autocomplete_searchbar') auto_searchbar;


  brandTreadMap = {};
  results = {mfg: [], size: [], tread: [], rim: [], rr:[], weight:[], xone:[]};
  type = '';
  data = [];
  // data = ["XD", "XD2", "X1LED", "X1LET", "X1MET", "XCA", "XCOACHHLZ", "XDA ENERGY", "XDA5", "XDA5+"];
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController, public http:HttpClient) {
    this.autocomplete = '';
    if(navParams.get('dataset') != undefined ) {
      this.data = navParams.get('dataset');
    }


    this.autocompleteItems = this.navParams.get("passedinData");

    this.data = this.navParams.get("passedinData");
   




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AutocompletePagePage');
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.auto_searchbar.setFocus();
    }, 150);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  chooseItem(item: any) {
    this.viewCtrl.dismiss(item);
  }

  updateSearch() {
    if (this.autocomplete == '') {
      this.autocompleteItems = this.data;
      return;
    }

    this.autocompleteItems = [];

    for (var i=0; i< this.data.length; i++) {
      if(this.data[i].toLowerCase().indexOf(this.autocomplete.toLowerCase()) != -1){
        this.autocompleteItems.push(this.data[i])
      }
    }

    if(this.autocompleteItems.length == 0){
      this.autocompleteItems.push(this.autocomplete);
    }


  }

}


