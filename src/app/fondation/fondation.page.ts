import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-fondation',
  templateUrl: './fondation.page.html',
  styleUrls: ['./fondation.page.scss'],
})
export class FondationPage implements OnInit {
  nom: string;
  logo: any;
  focus: string;
  page: string = "fondation";

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.nom = environment.NOM;
    this.logo = environment.LOGO;
    this.focus = environment.FOCUS;
  }

  goToPageBack(){
    this.navCtrl.navigateBack("/home");
  }

  segmentChanged(ev:any){
    //console.log(ev);
  }

}
