import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsComponent } from '../pages/tabs/tabs.component';
import { SliderComponent } from '../pages/slides/slides.component';

@Component({
  templateUrl: 'app.component.html'
})
export class MyApp {
  rootPage:any = localStorage.isSkip ? TabsComponent : SliderComponent;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // let status bar overlay webview
      statusBar.overlaysWebView(false);
      statusBar.backgroundColorByHexString('#005662');
      splashScreen.hide();
    });
  }
}
