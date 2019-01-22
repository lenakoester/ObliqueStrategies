import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Storage} from "@ionic/storage";
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  history: number[];
  totalCardsPlayed: number;
  cardHistory: number[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  public async showHistory(){
    this.history= await this.storage.get('history');
    console.log(this.history);
  }
  public async showBadges(){
    this.storage.get('history').then((historie) => {
      this.cardHistory = JSON.parse(historie) || [];
      this.totalCardsPlayed = this.cardHistory.length;
      console.log(this.totalCardsPlayed);
    })
  }
  public clearHistory(){
    this.storage.clear().then(() => {console.log('Historie entfernt')});
  }
}
