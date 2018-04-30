import { Injectable } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { SettingsComponent } from '../components/settings/settings.component';

@Injectable()
export class UtilityService {
	constructor(
		public modalCtrl: ModalController
	) {}

	openModal(ev) {
		let popover = this.modalCtrl.create(SettingsComponent);
    	popover.present();
	}
}