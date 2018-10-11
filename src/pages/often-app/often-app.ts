import { Component, OnDestroy } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';
import { IApp } from '../../domain/entity';
import { Subject } from "rxjs";

/**
 * Generated class for the OftenAppPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-often-app',
  templateUrl: 'often-app.html',
})
export class OftenAppPage implements OnDestroy {

  appList: IApp[];
  canDeleteHistory: boolean = false;

  private destory$: Subject<any> = new Subject<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public appProvider: AppProvider,
    private actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    this.appProvider.oftenAppList$
      .takeUntil(this.destory$)
      .subscribe(apps => {
        this.appList = apps;
      });
    this.appProvider.loadOftenApp();
  }

  ngOnDestroy(): void {
    this.destory$.next();
  }

  toggleSwitch(): void {
    this.canDeleteHistory = !this.canDeleteHistory;
  }

  deleteOftenApp(app: IApp): void {
    this.appProvider.deleteToOften(app.id);
  }

  openMenu(app: IApp): void {
    this.actionSheetCtrl.create({
      buttons: [
        {
          text: '清除历史',
          handler: () => {
            console.log(`${app.appName}清除历史`);
          }
        }
      ]
    }).present();
  }
}
