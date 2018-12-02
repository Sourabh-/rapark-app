import { Component, OnInit } from '@angular/core';
import { ViewController, AlertController } from 'ionic-angular';

import { UtilityService } from '../../services/utility.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.component.html'
})
export class SettingsComponent implements OnInit {
  
  public settings: any = {
  	customCharges: {}
  };
  public isCar: boolean = true;
  public heading: string = 'Four Wheeler';

  constructor(
 	  public viewCtrl: ViewController,
  	public httpService: HttpService,
  	public utilityService: UtilityService,
    public alertCtrl: AlertController
  ) {}

  dismiss() {
  	this.viewCtrl.dismiss();
  }

  ngOnInit() {
  	this.getSettings('TWO_WHEELER');
    this.getSettings('FOUR_WHEELER');
  }

  getSettings(type) {
    let _settings = (type == 'TWO_WHEELER') ? this.utilityService.twoWheelerSettings : this.utilityService.fourWheelerSettings;
  	if(_settings && Object.keys(_settings).length) {
  		this.settings = _settings;
  	} else {
  		this.httpService.getSettings(this.isCar ? 'CAR' : 'BIKE')
  		.subscribe(
  			(res) => {
  				_settings = Object.keys(res).length ? res : { customCharges: {} };
  				this.settings = _settings;
  			},
  			(err) => {
  				this.utilityService.showToast(err);
  			}
  		)
  	}
  }

  updateSettings(form) {
  	if(form.valid) {
  		let json = {};
      let _settings = !this.isCar ? this.utilityService.twoWheelerSettings : this.utilityService.fourWheelerSettings;
  		for(let key in _settings) {
  			if(typeof this.settings[key] == 'object' && JSON.stringify(this.settings[key]) != JSON.stringify(_settings[key])) {
  				json[key] = JSON.parse(JSON.stringify(this.settings[key]));
  			} else if(this.settings[key] != _settings[key])
  				json[key] = this.settings[key];
  		}

  		if(Object.keys(json).length) {
  			this.utilityService.showLoader();
  			this.httpService.setSettings(json, this.isCar ? 'CAR' : 'BIKE')
  			.subscribe(
  				(res) => {
  					this.utilityService.hideLoader();
  					this.utilityService.showToast("SAVED");
  					_settings = this.settings;
  				},
  				(err) => {
  					this.utilityService.hideLoader();
  					this.utilityService.showToast(err);
  				}
  			)
  		} else {
  			this.utilityService.showToast("NOTHING TO SAVE");
  		}
  	}
  }

  switchType(ev) {
    this.heading = this.isCar ? 'Four Wheeler' : 'Two Wheeler';
    this.getSettings(this.isCar ? 'FOUR_WHEELER' : 'TWO_WHEELER');
  }

  showKeyPrompt() {
    let key = localStorage.authKey || '';
    let prompt = this.alertCtrl.create({
      message: "Enter Key provided by RaPark",
      inputs: [
        {
          name: 'Key',
          placeholder: 'Key',
          value: (key + '')
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          cssClass: 'dark-fg',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          cssClass: 'dark-fg',
          handler: data => {
            localStorage.authKey = data.Key;
            console.log('Saved clicked');
            this.getSettings('TWO_WHEELER');
            this.getSettings('FOUR_WHEELER');
          }
        }
      ]
    });
    prompt.present();
  }
  
}
