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

  private appList: IApp[] = [];
  private favAppList: IApp[] = [];

  public loadAllApp(): void {
    if (this.appList.length <= 0) {
      this.appList.push(new IApp("一号APP", "../../assets/icon/i1.png"));
      this.appList.push(new IApp("二号APP", "../../assets/icon/i2.png"));
      this.appList.push(new IApp("三号APP", "../../assets/icon/i3.png"));
      this.appList.push(new IApp("四号APP", "../../assets/icon/i2.png"));
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
}
