import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BrowserTab } from "@ionic-native/browser-tab";
import { BatteryStatus } from "@ionic-native/battery-status";
import { Geolocation } from "@ionic-native/geolocation";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
      public navCtrl: NavController,
      private browserTab: BrowserTab,
      private batteryStatus: BatteryStatus,
      private geolacation: Geolocation,
  ) {
      browserTab.isAvailable()
          .then((isAvailable) => {
              if(isAvailable){
                  browserTab.openUrl('https://scholofnet.com');
              } else {
                console.log('browser tab não disponivel');
              }
          })

      this.batteryStatus.onChange().subscribe(status => {
          console.log(status);
      });

      const options = {timeout: 1000, enableHighAccuracy: true, maximumAge: 3600};
      this.geolacation.getCurrentPosition(options).then(resp => {
          console.log('getCurrentPosition: ',resp);
      });

      this.geolacation.watchPosition(options).subscribe(resp => {
          console.log('watchPosition: ', resp);
      });
  }

}
