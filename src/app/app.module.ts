import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyAppPage } from '../pages/my-app/my-app';
import { ComponentsModule } from '../components/components.module';
import { AppProvider } from '../providers/app/app';
import { HttpClientModule } from '@angular/common/http';
import { AllAppPage } from '../pages/all-app/all-app';
import { AppInfoPage } from '../pages/app-info/app-info';
import { OftenAppPage } from '../pages/often-app/often-app';
import { AppViewPage } from '../pages/app-view/app-view';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    MyAppPage,
    AllAppPage,
    AppInfoPage,
    OftenAppPage,
    AppViewPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    MyAppPage,
    AllAppPage,
    AppInfoPage,
    OftenAppPage,
    AppViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AppProvider
  ]
})
export class AppModule { }
