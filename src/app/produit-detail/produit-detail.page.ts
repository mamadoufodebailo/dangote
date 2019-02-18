import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.page.html',
  styleUrls: ['./produit-detail.page.scss'],
})
export class ProduitDetailPage implements OnInit {
  nom: string;
  logo: any;
  focus: string;
  produit: any;

  constructor(private modalCtrl: ModalController,private navParams: NavParams) { }

  ngOnInit() {
    this.nom = environment.NOM;
    this.logo = environment.LOGO;
    this.focus = environment.FOCUS;

    this.produit = this.navParams.get('produit');
  }

  onClose(){
    this.modalCtrl.dismiss();
  }

}
