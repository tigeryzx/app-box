import { Component, EventEmitter, Output } from '@angular/core';
import { LoginRequest } from '../../domain/entity';

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  @Output()
  onLogin: EventEmitter<LoginRequest> = new EventEmitter<LoginRequest>();

  loginInfo: LoginRequest = new LoginRequest();

  constructor() {

  }

  login(): void {
    if (this.loginInfo.loginName && this.loginInfo.password) {
      this.onLogin.next(this.loginInfo);
    }
  }
}
