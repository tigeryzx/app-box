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
      let app = new IApp()
      app.appName = "一号APP";
      app.appIconUrl = "../../assets/icon/i1.png";
      this.appList.push(app);

      app = new IApp()
      app.appName = "二号APP";
      app.appIconUrl = "../../assets/icon/i2.png";
      this.appList.push(app);

      app = new IApp()
      app.appName = "三号APP";
      app.appIconUrl = "../../assets/icon/i3.png";
      this.appList.push(app);

      app = new IApp()
      app.appName = "四号APP";
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
}
