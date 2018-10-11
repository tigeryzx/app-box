import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IApp } from '../../domain/entity';
import { AppProvider } from '../../providers/app/app';

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
    private appProvider: AppProvider
  ) {

  }

  openApp(): void {
    if (!this.showDeleteBtn && this.app.url) {
      this.appProvider.addToOften(this.app);
      window.location.href = this.app.url;
    }
  }

  delete(): void {
    this.onDelete.next(this.app);
  }
}
