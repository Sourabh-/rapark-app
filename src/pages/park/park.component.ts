import { Component } from '@angular/core';
import { UtilityService } from '../../shared/services/utility.service';
import { HttpService } from '../../shared/services/http.service';
import { SettingsComponent } from '../../shared/components/settings/settings.component';

@Component({
  selector: 'app-park',
  templateUrl: 'park.component.html'
})
export class ParkComponent {
  
  public vehicle: any = {};
  public heading: string = 'Four Wheeler';
  public isCar: boolean = true;

  constructor(
  	public utilityService: UtilityService,
  	public httpService: HttpService
  ) {}

  keyPress(ev) {
  	if(this.vehicle.phoneNumber && this.vehicle.phoneNumber.length == 10)
  		ev.preventDefault();
  }

  changeCase(ev) {
  	if(this.vehicle.regNo) this.vehicle.regNo = this.vehicle.regNo.toUpperCase();
  }

  sendOTP(form) {
  	if(form.valid) {
  		this.utilityService.showLoader();
  		this.httpService.generateOTP((this.isCar ? 'CAR' : 'BIKE'), this.vehicle.phoneNumber, this.vehicle.regNo)
  		.subscribe(
  			(res) => {
  				this.utilityService.hideLoader();
  				this.utilityService.showToast("OTP SENT");
  				this.vehicle = {};
          form.reset();
  			},
  			(err) => {
  				this.utilityService.hideLoader();
  				this.utilityService.showToast(err);
  			}
  		)
  	}
  }

  openModal(ev) {
  	this.utilityService.openModal(ev, SettingsComponent);
  }

  switchType() {
    this.isCar = !this.isCar;
    this.heading = this.isCar ? 'Four Wheeler' : 'Two Wheeler';
  }

}
