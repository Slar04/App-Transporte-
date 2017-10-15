import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Network } from '@ionic-native/network';

/**
 * Generated class for the Nueva2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nueva2',
  templateUrl: 'nueva2.html',
})
export class Nueva2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private network: Network) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Nueva2Page');
  }

  /*conexion(){
	let connectSubscription = this.network.onConnect().subscribe(() => {
  console.log('network connected!');
  // We just got a connection but we need to wait briefly
   // before we determine the connection type. Might need to wait.
  // prior to doing any api requests as well.
  setTimeout(() => {
    if (this.network.type === 'wifi') {
      console.log('we got a wifi connection, woohoo!');
    }
  }, 3000);
	});
	}*/
}
