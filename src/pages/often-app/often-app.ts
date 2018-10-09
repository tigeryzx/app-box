import { Component, OnDestroy } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

  private destory$: Subject<any> = new Subject<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public appProvider: AppProvider) {
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

}
