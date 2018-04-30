import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.component.html'
})
export class SettingsComponent {

  constructor(
  	public viewCtrl: ViewController
  ) {}

  dismiss() {
  	this.viewCtrl.dismiss();
  }
  
}
