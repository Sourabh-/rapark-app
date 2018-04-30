import { Component } from '@angular/core';

import { ParkComponent } from '../park/park.component';
import { PayComponent } from '../pay/pay.component';

@Component({
  templateUrl: 'tabs.component.html'
})
export class TabsComponent {

  tab1Root = ParkComponent;
  tab2Root = PayComponent;

  constructor() {

  }
}
