import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {Router} from '@angular/router';
import {DocumentViewer,DocumentViewerOptions} from '@ionic-native/document-viewer/ngx';

@Component({
  selector: 'app-distributeur',
  templateUrl: './distributeur.page.html',
  styleUrls: ['./distributeur.page.scss'],
})
export class DistributeurPage implements OnInit {
  nom: string;
  logo: any;
  focus: string;

  constructor(private router:Router,private documentViewer: DocumentViewer) { }

  ngOnInit() {
    this.nom = environment.NOM;
    this.logo = environment.LOGO;
    this.focus = environment.FOCUS;
  }

  goToPageBack(){
    this.router.navigateByUrl("/home");
  }

  getDemande(){
    const options : DocumentViewerOptions = {
      title: 'Test Admission'
    };

    this.documentViewer.viewDocument("assets/fichier/distributeur.pdf",'application/pdf',options);
  }

}
