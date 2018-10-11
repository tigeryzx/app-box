import { Component, OnDestroy } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';
import { IApp, LoginRequest } from '../../domain/entity';
import { Subject } from 'rxjs/Subject';

/**
 * Generated class for the MyAppPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my-app',
  templateUrl: 'my-app.html',
})
export class MyAppPage implements OnDestroy {

  appList: IApp[];
  isLogin: boolean = false;
  canDeleteFav: boolean = false;

  private destory$: Subject<any> = new Subject<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private appProvider: AppProvider) {
  }

  ionViewDidLoad() {
    this.appProvider.favAppList$
      .takeUntil(this.destory$)
      .subscribe(apps => {
        this.appList = apps;
      });
    this.appProvider.loadFavApp();
  }

  ngOnDestroy(): void {
    this.destory$.next();
  }

  onLogin(loginInfo: LoginRequest): void {
    console.log(`登录${loginInfo.loginName}-${loginInfo.password}`);
    this.isLogin = true;
  }

  toggleSwitch(): void {
    this.canDeleteFav = !this.canDeleteFav;
  }

  deleteFavApp(app: IApp): void {
    this.appProvider.deleteToFav(app.id);
  }
}
