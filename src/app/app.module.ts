import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {IonicStorageModule} from '@ionic/storage';
import {PopoverPageModule} from './popover/popover.module';
import {ActualiteDetailPageModule} from './actualite-detail/actualite-detail.module';
import {ProduitDetailPageModule} from './produit-detail/produit-detail.module';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {DocumentViewer} from '@ionic-native/document-viewer/ngx';
import {GoogleMaps} from '@ionic-native/google-maps/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
      IonicStorageModule.forRoot(),PopoverPageModule, ActualiteDetailPageModule,
      ProduitDetailPageModule],
  providers: [
      Geolocation,
      DocumentViewer,
      GoogleMaps,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
