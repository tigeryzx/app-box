import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IApp } from '../../domain/entity';

/**
 * Generated class for the AppViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-app-view',
  templateUrl: 'app-view.html',
})
export class AppViewPage {

  safeUrl: SafeResourceUrl;
  app: IApp;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private sanitizer: DomSanitizer) {
    this.app = this.navParams.get('app');
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.app.url);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppViewPage');
  }

  backToHome(): void {
    this.navCtrl.pop();
  }
}
