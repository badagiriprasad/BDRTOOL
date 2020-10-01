import { Component ,ViewChild} from '@angular/core';
import { NavController, NavParams ,Navbar} from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";
import {Storage} from "@ionic/storage";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'page-help',
  templateUrl: 'help.html'
})
export class HelpPage {
  @ViewChild(Navbar) navBar:Navbar;
  
  currency='USD';
  constructor(public navCtrl: NavController, public navParams: NavParams,public tranlateService:TranslateService,public storage : Storage,public http:HttpClient) {
    this.currency = localStorage.getItem("selectedCurrency");

  }
  ionViewDidLoad() {
  }

 
}
