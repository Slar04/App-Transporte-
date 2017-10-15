import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';


import { NuevaPage } from '../nueva/nueva';
import { Nueva2Page } from '../nueva2/nueva2';
import { Nueva3Page } from '../nueva3/nueva3';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController
  	 ) {
  }

First(){
	this.navCtrl.push(NuevaPage);
}

First2(){
	this.navCtrl.push(Nueva2Page);
}

First3(){
	this.navCtrl.push(Nueva3Page);
}

Hola() {
    let alert = this.alertCtrl.create({
      title: 'Alerta!',
      subTitle: 'Eres un maldito crack!',
      buttons: ['Lo sé']
    });
    alert.present();
  }

}



