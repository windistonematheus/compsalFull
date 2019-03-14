import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedPageModule } from './feed/feed.module';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './search.pipe';
//import { BrMaskerModule } from 'brmasker-ionic-3';
//import { InputMaskModule } from 'ionic-input-mask';
//import { IonMaskModule } from '@pluritech/ion-mask';


@NgModule({
  declarations: [AppComponent, SearchPipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FeedPageModule, HttpClientModule], 
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
