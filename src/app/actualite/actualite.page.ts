import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {ModalController, NavController} from '@ionic/angular';
import {Actualite} from '../modele/actualite';
import {ActualiteDetailPage} from '../actualite-detail/actualite-detail.page';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.page.html',
  styleUrls: ['./actualite.page.scss'],
})
export class ActualitePage implements OnInit {
  nom: string;
  logo: any;
  focus: string;
  actualites = [
      {
          date: "20 Juillet 2018",
          photo: "assets/images/actualite/resultat.png",
          titre: "Dangote Cement Plc annonce ses résultats non audités pour les six mois se terminant le 30 Juin 2018",
          description: "reprise robuste au Nigeria, avec des ventes totales de ciment en hausse de 13,9%, entraîne l'augmentation de 16,9% du chiffre d'affaires du Groupe et 20,8% d'augmentation du Groupe EBITDA Lagos, le 20 Juillet 2018: Dangote PLC Cement (DANGCEM-NL), le plus grand producteur de ciment de l'Afrique, annonce les résultats non vérifiés pour les six mois se terminant le 30 Juin 2018. Faits saillants financiers du Groupe chiffre d'affaires en hausse de 16,9% à l'EBITDA du Groupe ₦ 482.4B [...]",
          contenu: "Faits saillants financiers\n" +
          "\n" +
          "    chiffre d'affaires du Groupe en hausse de 16,9% à ₦ 482.4B\n" +
          "    EBITDA du Groupe en hausse de 20,8% à ₦ 246.0B, la marge de 51,0%\n" +
          "    Nigeria EBITDA en hausse de 19,3% à ₦ 226.9B, la marge de 65,9%\n" +
          "    L'EBITDA panafricain en hausse de 31,9% à ₦ 25.9B, la marge de 18,7%\n" +
          "    Le bénéfice par action en hausse de 3,0% à 6,60 ₦\n" +
          "    émission réussie de ₦ 50B papier commercial sous ₦ Programme 150B; le plus important jamais émission par une société nigériane\n" +
          "    La forte génération de trésorerie prend en charge la dette nette de ₦ 232.8B après ₦ 178.9B distribution de dividendes\n" +
          "\n" +
          "Faits saillants d'exploitation\n" +
          "\n" +
          "    Le total des volumes de ventes Nigeria en hausse de 13,9% à 7.8Mt\n" +
          "    Nigeria volume des ventes intérieures de 7.3Mt, à près de 66% des parts de marché\n" +
          "    volumes panafricaines en baisse de 3,9% à près 4.6Mt principalement en raison du ralentissement de la production en Tanzanie\n"
      },
      {
          date: "3 Juillet 2018",
          photo: "assets/images/actualite/images.jpg",
          titre: "Émission de 50 milliards de ₦ série 1 et 2 billets en vertu du programme de papier commercial de 150 milliards de ₦",
          description: "Le plus grand jamais l'émission de papier commercial par une société nigériane Lagos, le 3 Juillet 2018: Dangote PLC Cement (DANGCEM-NL), le plus grand producteur de ciment de l'Afrique, annonce l'émission de 50 milliards de ₦ série 1 et 2 billets dans le cadre de son 150 milliards ₦ programme de papier commercial, a annoncé le 27 Juin 2018. Les séries 1 et 2 billets seront inscrits à la cote du Nigeria [...]",
          contenu: "La série 1 et 2 billets seront inscrits sur les titres de gré à gré FMDQ Bourse du Nigeria le 19 juillet 2018. Les fonds recueillis dans le programme de papier commercial (CP) sera utilisé pour les dépenses en capital, le fonds de roulement et à des fins générales de l'entreprise."
      }
      ];

  constructor(private navCtrl: NavController,private modalCtrl: ModalController) {

  }

  ngOnInit() {
      this.nom = environment.NOM;
      this.logo = environment.LOGO;
      this.focus = environment.FOCUS;
  }

  goPageBack(){
    this.navCtrl.navigateBack("/home");
  }

  async onDetail(actu){
      let modal = await this.modalCtrl.create({
          component:ActualiteDetailPage,
          componentProps:{
              actualite:actu
          }
      });

      modal.present();
  }

}
