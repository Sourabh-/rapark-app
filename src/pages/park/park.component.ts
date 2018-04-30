import { Component } from '@angular/core';
import { UtilityService } from '../../shared/services/utility.service';

@Component({
  selector: 'app-park',
  templateUrl: 'park.component.html'
})
export class ParkComponent {

  constructor(
  	public utilityService: UtilityService
  ) {

  }

}
