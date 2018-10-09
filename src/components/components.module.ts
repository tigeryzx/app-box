import { NgModule } from '@angular/core';
import { IappComponent } from './iapp/iapp';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [IappComponent,
    LoginComponent],
	imports: [
		BrowserModule,
		IonicModule
	],
	exports: [IappComponent,
    LoginComponent]
})
export class ComponentsModule {}
