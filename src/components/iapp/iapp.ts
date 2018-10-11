import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IApp } from '../../domain/entity';
import { AppProvider } from '../../providers/app/app';
import { App } from 'ionic-angular';
import { AppViewPage } from '../../pages/app-view/app-view';

/**
 * Generated class for the IappComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'iapp',
  templateUrl: 'iapp.html'
})
export class IappComponent {

  @Input()
  app: IApp;
  @Input()
  showDeleteBtn: boolean = false;
  @Input()
  showAnimate: boolean = false;

  @Output()
  onDelete: EventEmitter<IApp> = new EventEmitter<IApp>();

  constructor(
    private appProvider: AppProvider,
    private appCtrl: App
  ) {

  }

  openApp(): void {
    if (!this.showDeleteBtn && this.app.url) {
      this.appProvider.addToOften(this.app);
      this.appCtrl.getRootNav().push(AppViewPage, {
        app: this.app
      });
    }
  }

  delete(): void {
    this.onDelete.next(this.app);
  }
}
