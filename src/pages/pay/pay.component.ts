import { Component } from '@angular/core';
import { UtilityService } from '../../shared/services/utility.service';
import { HttpService } from '../../shared/services/http.service';
import { SettingsComponent } from '../../shared/components/settings/settings.component';

@Component({
  selector: 'app-pay',
  templateUrl: 'pay.component.html'
})
export class PayComponent {

  public vehicle: any = {};
  public payment: any = {};
  public showPayment: boolean = false;

  constructor(
  	public utilityService: UtilityService,
    public httpService: HttpService
  ) {}

  getAmount(form) {
  	if(form.valid) {
      this.utilityService.showLoader();
      this.httpService.getAmount(this.payment.otp)
      .subscribe(
        (res) => {
          this.utilityService.hideLoader();
          this.payment = {};
          this.vehicle = res;
          this.showPayment = true;
          form.reset();
        },
        (err) => {
          this.utilityService.hideLoader();
          this.utilityService.showToast(err);
        }
      )
    }
  }

  reset() {
    this.showPayment = false;
    this.vehicle = {};
  }

  openModal(ev) {
    this.utilityService.openModal(ev, SettingsComponent);
  }
}
