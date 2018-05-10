import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicModule } from 'ionic-angular';

import { SettingsComponent } from './components/settings/settings.component';

import { UtilityService } from './services/utility.service';
import { HttpService } from './services/http.service';

@NgModule({
  declarations: [
  	SettingsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule,
    HttpModule
  ],
  entryComponents: [
  	SettingsComponent
  ],
  exports: [
  	SettingsComponent
  ],
  providers: [ UtilityService, HttpService ]
})
export class SharedModule {
  
}
