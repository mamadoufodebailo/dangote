import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {environment} from '../../environments/environment.prod';
import {Contact} from '../modele/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  nom: string;
  logo: any;
  focus: string;
  contact:Contact = new Contact();
  message: string;
  couleur: string;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
      this.nom = environment.NOM;
      this.logo = environment.LOGO;
      this.focus = environment.FOCUS;
      this.couleur = environment.COULEUR;
  }

  goToPageBack(){
    this.navCtrl.navigateBack("/home");
  }

  addContact(contact){
      //console.log(JSON.stringify(this.contact));
      this.message = "Votre message a été bien envoyé !";
  }

}
