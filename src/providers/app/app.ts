import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApp } from '../../domain/entity';
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the AppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppProvider {

  constructor(public http: HttpClient) {

  }

  public appList$: Subject<IApp[]> = new Subject<IApp[]>();
  public favAppList$: Subject<IApp[]> = new Subject<IApp[]>();
  public oftenAppList$: Subject<IApp[]> = new Subject<IApp[]>();

  private appList: IApp[] = [];
  private favAppList: IApp[] = [];
  private oftenAppList: IApp[] = [];

  public loadAllApp(): void {
    if (this.appList.length <= 0) {
      let app = new IApp();
      app.id = 1;
      app.appName = "分享小站";
      app.url = "http://video.tiger.cn/";
      app.appIconUrl = "../../assets/icon/i4.png";
      this.appList.push(app);

      app = new IApp();
      app.id = 2;
      app.appName = "二号APP";
      app.url = "http://www.baidu.com/";
      app.appIconUrl = "../../assets/icon/i1.png";
      this.appList.push(app);

      app = new IApp();
      app.id = 3;
      app.appName = "三号APP";
      app.url = "http://www.baidu.com/";
      app.appIconUrl = "../../assets/icon/i3.png";
      this.appList.push(app);

      app = new IApp();
      app.id = 4;
      app.appName = "四号APP";
      app.url = "http://www.baidu.com/";
      app.appIconUrl = "../../assets/icon/i2.png";
      this.appList.push(app);
    }
    this.appList$.next(this.appList);
  }

  public loadFavApp(): void {
    this.loadAllApp();
    if (this.favAppList.length <= 0) {
      this.favAppList.push(this.appList[0]);
      this.favAppList.push(this.appList[2]);
    }
    this.favAppList$.next(this.favAppList);;
  }

  public loadOftenApp(): void {
    this.loadAllApp();
    if (this.favAppList.length <= 0) {
      this.oftenAppList.push(this.appList[0]);
    }
    this.oftenAppList$.next(this.oftenAppList);;
  }

  public addApp(app: IApp): void {
    this.appList.push(app);
    this.appList$.next(this.appList);
  }

  public updateApp(app: IApp): void {
    var appIndex = this.appList.findIndex(x => x.id == app.id);
    if (appIndex != -1)
      this.appList[appIndex] = app;
    this.appList$.next(this.appList);
  }

  public deleteApp(appId: number): void {
    var appIndex = this.appList.findIndex(x => x.id == appId);
    if (appIndex != -1) {
      this.appList.splice(appIndex, 1);
    }
    this.appList$.next(this.appList);
  }

  public addToFav(app: IApp): void {
    var oldApp = this.favAppList.find(x => x.id == app.id);
    if (!oldApp) {
      this.favAppList.push(app);
    }
    this.favAppList$.next(this.favAppList);
  }

  public deleteToFav(appId: number): void {
    var appIndex = this.favAppList.findIndex(x => x.id == appId);
    if (appIndex != -1) {
      this.favAppList.splice(appIndex, 1);
    }
    this.favAppList$.next(this.favAppList);
  }

  public addToOften(app: IApp): void {
    var oldApp = this.oftenAppList.find(x => x.id == app.id);
    if (!oldApp) {
      this.oftenAppList.push(app);
    }
    this.oftenAppList$.next(this.oftenAppList);
  }

  public deleteToOften(appId: number): void {
    var appIndex = this.oftenAppList.findIndex(x => x.id == appId);
    if (appIndex != -1) {
      this.oftenAppList.splice(appIndex, 1);
    }
    this.oftenAppList$.next(this.oftenAppList);
  }
}
