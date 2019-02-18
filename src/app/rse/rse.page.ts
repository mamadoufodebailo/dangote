import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {environment} from '../../environments/environment.prod';

@Component({
  selector: 'app-rse',
  templateUrl: './rse.page.html',
  styleUrls: ['./rse.page.scss'],
})
export class RsePage implements OnInit {
  nom: string;
  logo: any;
  focus: string;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.nom = environment.NOM;
    this.logo = environment.LOGO;
    this.focus = environment.FOCUS;
  }

  goPageBack(){
    this.navCtrl.navigateBack("/home");
  }

}
