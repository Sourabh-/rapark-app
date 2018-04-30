import { Component } from '@angular/core';
import { UtilityService } from '../../shared/services/utility.service';

@Component({
  selector: 'app-pay',
  templateUrl: 'pay.component.html'
})
export class PayComponent {

  constructor(
  	public utilityService: UtilityService
  ) {

  }

}
