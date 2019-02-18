import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {ModalController, NavController} from '@ionic/angular';
import {CommandeService} from '../services/commande/commande.service';
import {PopoverPage} from '../popover/popover.page';

@Component({
  selector: 'app-commande-detail',
  templateUrl: './commande-detail.page.html',
  styleUrls: ['./commande-detail.page.scss'],
})
export class CommandeDetailPage implements OnInit {
  nom: string;
  logo: any;
  focus: string;
  panier: any;
  price: number = 0;
  livraison: number;
  type: string;

  constructor(private navCtrl: NavController, private commandeService: CommandeService,
              private modalCtrl: ModalController) {
  }

  ngOnInit() {
      this.nom = environment.NOM;
      this.logo = environment.LOGO;
      this.focus = environment.FOCUS;
      this.livraison = environment.LIVRAISON;

      this.commandeService.getPanier().then((data)=>{
          this.panier = data;

          if (this.panier instanceof Array){
              this.panier.forEach((value) => {
                  this.price += (((value.nombre * 20) * value.prix) * 0.9)
                      + (value.centime * value.prix);
              });
          }

      }).catch((error)=>{
          console.log(error);
      });

      this.commandeService.getType().then((data)=>{
          this.type = data;
      },(error)=>{
          console.log(error);
      });

  }

  goToPageBack(){
      this.commandeService.initialiser();

      this.navCtrl.navigateBack("/commande");
  }

  async addInfo(){
      const modal = await this.modalCtrl.create({
          component:PopoverPage,
          componentProps:{
              panier: this.panier,
              total: this.price + this.livraison,
              type: this.type
          },
      });

      modal.present();
  }

}
