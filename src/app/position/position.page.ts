import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {Router} from '@angular/router';
import {GoogleMap} from '@ionic-native/google-maps';
import {Platform} from '@ionic/angular';
import {Environment, GoogleMapOptions, GoogleMaps} from '@ionic-native/google-maps/ngx';

@Component({
  selector: 'app-position',
  templateUrl: './position.page.html',
  styleUrls: ['./position.page.scss'],
})
export class PositionPage implements OnInit {
    nom: string;
    logo: any;
    focus: string;
    latitude: number;
    longitude: number;
    message: string;

  constructor(private geolocation: Geolocation,private router: Router,
              private platform: Platform) {
    this.geolocation.getCurrentPosition().then((data)=>{
      this.latitude = data.coords.latitude;
      this.longitude = data.coords.longitude;
    }).catch((error)=>{
      this.message = "Impossible de recuperer votre position, Veuillez activer le GPS";
      console.error(error);
    });

  }

  ngOnInit() {
    this.nom = environment.NOM;
    this.logo = environment.LOGO;
    this.focus = environment.FOCUS;

    this.platform.ready();
    this.loadMap();
  }

  goToPageBack(){
    this.router.navigateByUrl("/commande");
  }

  localiser(ev:Event){

  }

  loadMap(){
    Environment.setEnv({
        'API_KEY_FOR_BROWSER_RELEASE' : 'AIzaSyAt4z3YYqkh8kZfgISMz23CYzu5aVl_IT4',
        'API_KEY_FOR_BROWSER_DEBUG' : 'AIzaSyAt4z3YYqkh8kZfgISMz23CYzu5aVl_IT4'
    });

      let mapOptions: GoogleMapOptions = {
          camera: {
              target: {
                  lat: this.latitude,
                  lng: this.longitude
              },
              zoom: 18,
              tilt: 30
          }
      };

      GoogleMaps.prototype.create('maps_canvas',mapOptions)
        .addMarkerSync({
            title: 'Votre Depot le plus proche',
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: this.latitude,
              lng: this.longitude
            }
        }).showInfoWindow();
  }

}
