import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ParkComponent } from '../pages/park/park.component';
import { PayComponent } from '../pages/pay/pay.component';
import { TabsComponent } from '../pages/tabs/tabs.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MyApp,
    ParkComponent,
    PayComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SharedModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ParkComponent,
    PayComponent,
    TabsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
