import { Component, ViewChild } from '@angular/core';
import {  Navbar, NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-retread',
  templateUrl: 'retread.html'
})
export class RetreadRebuyPage {
  @ViewChild(Navbar) navBar:Navbar;
  lifeCycle :String;
  
  constructor(public navCtrl: NavController, public events:Events, private modalCtrl:ModalController) {
    this.lifeCycle = 'firstLife';

  }

  saveTireSegmentInfo($event, name1:string) {
  }
}