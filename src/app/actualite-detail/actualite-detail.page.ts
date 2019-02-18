import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-actualite-detail',
  templateUrl: './actualite-detail.page.html',
  styleUrls: ['./actualite-detail.page.scss'],
})
export class ActualiteDetailPage implements OnInit {
  nom: string;
  logo: any;
  focus: string;
  actualite: any;

  constructor(private modalCtrl:ModalController,private navParams: NavParams) { }

  ngOnInit() {
    this.nom = environment.NOM;
    this.logo = environment.LOGO;
    this.focus = environment.FOCUS;

    this.actualite = this.navParams.get('actualite');
  }

  onClose(){
    this.modalCtrl.dismiss();
  }

}
