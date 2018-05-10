import { Injectable } from '@angular/core';
import { ModalController, ToastController, LoadingController } from 'ionic-angular';

@Injectable()
export class UtilityService {

	public loader: any;
	private loaderShown: boolean = false;
	public twoWheelerSettings: any = {};
	public fourWheelerSettings: any = {};

	constructor(
		public modalCtrl: ModalController,
		private toastCtrl: ToastController,
		private loadingCtrl: LoadingController
	) {}

	openModal(ev, component) {
		let popover = this.modalCtrl.create(component);
    	popover.present();
	}

	showToast(msg) {
		if(msg) {
			let toast = this.toastCtrl.create({
		      message: msg.toUpperCase(),
		      duration: 3000
		    });
		    
		    toast.present(); 
		}
	}

	showLoader() {
		if(!this.loaderShown) {
			this.loader = this.loadingCtrl.create({
		      content: "Please wait..."
		    });
		    this.loaderShown = true;
			this.loader.present();
		}
	}

	hideLoader() {
		if(this.loaderShown) {
			this.loaderShown = false;
			this.loader.dismiss();
		} 
	}
}