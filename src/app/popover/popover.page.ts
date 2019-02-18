import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {ModalController, NavController, NavParams} from '@ionic/angular';
import {Personne} from '../modele/personne';
import {CommandeService} from '../services/commande/commande.service';
import {MessagePage} from '../message/message.page';
import {Entreprise} from '../modele/entreprise';
import {Router} from '@angular/router';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {
  nom: string;
  logo: any;
  focus: string;
  personne: Personne = new Personne();
  entreprise: Entreprise = new Entreprise();
  panier: any;
  total: number;
  message: string;
  type: string;

  constructor(private modalCtrl: ModalController,private navParams: NavParams,
              private commandeService: CommandeService, private navCtrl: NavController,
              private router: Router) { }

  ngOnInit() {
      this.nom = environment.NOM;
      this.logo = environment.LOGO;
      this.focus = environment.FOCUS;

      this.panier = this.navParams.get('panier');
      this.total = this.navParams.get('total');
      this.type = this.navParams.get('type');
  }

  addPerson(){
    this.commandeService.initialiser().then((data)=> {
      this.message = "effectué !";

      this.modalCtrl.dismiss();

      this.navCtrl.navigateForward("/message");
    },(error)=> {
      this.message = 'Probléme !';
    });
  }

  addSociete(){
      this.commandeService.initialiser().then((data)=> {
          this.message = "effectué !";

          this.navCtrl.navigateForward("/message");
      },(error)=> {
          this.message = 'Probléme !';
      });
  }

  goToPageBack(){
    this.commandeService.initialiser().then((data)=> {
      console.log(data);
      },(error)=> {
      console.error(error);
    });

    this.modalCtrl.dismiss();
    this.router.navigateByUrl("/commande");
  }

}
