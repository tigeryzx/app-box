import { NgModule } from '@angular/core';
import { IappComponent } from './iapp/iapp';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
	declarations: [IappComponent],
	imports: [BrowserModule],
	exports: [IappComponent]
})
export class ComponentsModule {}
