import { Component, ViewChild } from '@angular/core';
import { Slides, NavController } from 'ionic-angular';
import { UtilityService } from '../../shared/services/utility.service';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'welcome-slider',
  templateUrl: 'slides.component.html'
})
export class SliderComponent {
  @ViewChild(Slides) slides: Slides;

  constructor(
    public utilityService: UtilityService,
    public navCtrl: NavController
  ) {}

  goToLastSlide() {
    while(!this.slides.isEnd()) {
      this.slides.slideNext();
    }
  }

  continue() {
    localStorage.isSkip = true;
    this.navCtrl.setRoot(TabsComponent);
  }
}