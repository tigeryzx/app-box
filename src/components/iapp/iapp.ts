import { Component, Input } from '@angular/core';
import { IApp } from '../../domain/entity';

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

  constructor() {

  }

  openApp(): void {
    console.log(`打开应用:${this.app.appName}`);
  }

}
