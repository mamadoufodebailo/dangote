import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {NavController, NavPush} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {CommandeService} from '../services/commande/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss'],
})
export class CommandePage implements OnInit {
  nom: string;
  logo: any;
  focus: string;
  type: any;
  produits = [
      {id: 1,prix: 3000,nombre: 0,centime:0,photo: "assets/images/produit/32.jpg",text: "32.5R Ciment (CEM II / B-LL)"},
      {id: 2,prix: 4500,nombre: 0,centime:0,photo: "assets/images/produit/45.jpg",text: "Ciment 42,5 R (CEM II-AL)\n"}
  ];

  panier = [];
  page: string;


  constructor(private navCtrl: NavController,private actiRouter: ActivatedRoute,
              private commandeService: CommandeService,private router: Router) { }

  ngOnInit() {
    this.type = this.actiRouter.snapshot.paramMap.get('type');
    this.nom = environment.NOM;
    this.logo = environment.LOGO;
    this.focus = environment.FOCUS;
  }

  openPanier(){
    if (this.page == 'sacs'){
        this.router.navigateByUrl("/position");
    }
    else {
        this.commandeService.addPanierAndComplement(this.panier,this.type);
        this.router.navigateByUrl("/commande-detail/detail");
    }
  }

  goToPageBack(){
    this.router.navigateByUrl("/home");
  }

  supprimerPanier(produit){
      this.supprimerNombreProduit(produit);

      this.supprimerProduit(produit);
  }

  supprimerNombreProduit(produit){
    this.produits.forEach((value) => {
      if (value.id >= 1 && value.id == produit.id){
        value.nombre -= 1;
        }});
  }

  supprimerProduit(produit){
    if (this.existeProduit(produit)){
      this.panier.forEach((value) => {
        if (value.id >= 1 && value.id == produit.id){
          value.nombre -= 1;
          value.nombre += 1;
          }
          });
      }
  }

  ajouterPanier(produit){
    this.addNombreProduit(produit);

    this.addProduit(produit);
  }

  addNombreProduit(produit){
    this.produits.forEach((value) => {
      if (value.id == produit.id){
          value.nombre += 1;
      }
    });
  }

  existeProduit(produit){
    return this.panier.find(prod=> prod.id === produit.id);
  }

  addProduit(produit){
    if (this.existeProduit(produit)){
        this.panier.forEach((value) => {
            if (value.id == produit.id){
                value.nombre -= 1;
                value.nombre += 1;
            }
        });
    }
    else
      this.panier.push(produit);
  }

  afficherPage(contenu) {
    if (contenu == 'tonnes')
      this.page = 'tonnes';
    else
      this.page = 'sacs';
  }

}
