import { Component } from '@angular/core';

import { MyAppPage } from '../my-app/my-app';
import { AllAppPage } from '../all-app/all-app';
import { OftenAppPage } from '../often-app/often-app';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = OftenAppPage;
  tab2Root = MyAppPage;
  tab3Root = AllAppPage;

  constructor() {

  }
}
