import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.page.html',
  styleUrls: ['./presentation.page.scss'],
})
export class PresentationPage implements OnInit {
  nom: string;
  logo: any;
  focus: string;
  couleur: string;

  constructor(private navCtrl: NavController) { }

  ngOnInit(){
    this.nom = environment.NOM;
    this.logo = environment.LOGO;
    this.focus = environment.FOCUS;
    this.couleur = environment.COULEUR;
  }

  goPageBack(){
    this.navCtrl.navigateBack("/home");
  }

}
