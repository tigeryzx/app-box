import { Component, OnDestroy } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { IApp } from '../../domain/entity';
import { AppProvider } from '../../providers/app/app';
import { AppInfoPage } from '../app-info/app-info';
import { Subject } from 'rxjs/Subject';

/**
 * Generated class for the AllAppPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-all-app',
  templateUrl: 'all-app.html',
})
export class AllAppPage implements OnDestroy {

  appList: IApp[];

  private destory$: Subject<any> = new Subject<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private appProvider: AppProvider,
    private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.appProvider.appList$
      .takeUntil(this.destory$)
      .subscribe(apps => {
        this.appList = apps;
      });
    this.appProvider.loadAllApp();
  }

  ngOnDestroy(): void {
    this.destory$.next();
  }

  addApp(): void {
    console.log('addApp');
    const modal = this.modalCtrl.create(AppInfoPage);
    modal.present();
  }
}
