import { Component } from '@angular/core';
import  { SpielenPage } from "../spielen/spielen";
import { NavController } from "ionic-angular";

@Component({
  selector: 'page-start',
  templateUrl: 'start.html'
})
export class StartPage {

  constructor(public navCtrl: NavController) {
  }
//
  goAnOtherPage() {
    this.navCtrl.setRoot(SpielenPage);
  }
}
