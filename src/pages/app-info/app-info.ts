import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IApp } from '../../domain/entity';
import { AppProvider } from '../../providers/app/app';

/**
 * Generated class for the AppInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-app-info',
  templateUrl: 'app-info.html',
})
export class AppInfoPage {

  app: IApp;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private appProvider: AppProvider) {
    var app = navParams.get('app');
    if (app)
      this.app = app;
    else {
      this.app = new IApp();
      this.app.url = "http://";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppInfoPage');
  }
  save(): void {

    if (!this.app.appName || !this.app.url || !this.app.appIconFont)
      return;

    if (this.app.id)
      this.appProvider.updateApp(this.app);
    else
      this.appProvider.addApp(this.app);

    this.navCtrl.pop();
  }
  dismiss(): void {
    this.navCtrl.pop();
  }
}
