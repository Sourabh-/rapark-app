import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsComponent } from '../pages/tabs/tabs.component';

@Component({
  templateUrl: 'app.component.html'
})
export class MyApp {
  rootPage:any = TabsComponent;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // let status bar overlay webview
      //statusBar.styleDefault();
      statusBar.overlaysWebView(false);

      // set status bar to white
      statusBar.backgroundColorByHexString('#1e853c');
      splashScreen.hide();
    });
  }
}
