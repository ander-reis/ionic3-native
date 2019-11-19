import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Camera } from '@ionic-native/camera';
import { BrowserTab } from "@ionic-native/browser-tab";
import { BatteryStatus } from "@ionic-native/battery-status";
import { Geolocation } from "@ionic-native/geolocation";

import { CameraMock } from "../mocks/CameraMock";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        BrowserTab,
        BatteryStatus,
        Geolocation,
        {provide: Camera, useClass: CameraMock},
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
