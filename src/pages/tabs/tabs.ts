import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { MyAppPage } from '../my-app/my-app';
import { AllAppPage } from '../all-app/all-app';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MyAppPage;
  tab2Root = AllAppPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
