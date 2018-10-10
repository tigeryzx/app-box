import { Component, Input, EventEmitter, Output } from '@angular/core';
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
  @Input()
  showDeleteBtn: boolean = false;
  @Input()
  showAnimate: boolean = false;

  @Output()
  onDelete: EventEmitter<IApp> = new EventEmitter<IApp>();

  constructor() {

  }

  openApp(): void {
    console.log(`打开应用:${this.app.appName}`);
  }

  delete(): void {
    this.onDelete.next(this.app);
  }
}
