import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private storage: Storage) { }

  addPanierAndComplement(panier,type?,total?){
    this.storage.set('panier',panier);
    this.storage.set('total',total);
    this.storage.set('type',type);
  }

  getPanier(){
    return this.storage.get('panier');
  }

  getType(){
    return this.storage.get('type');
  }

  getTotal(){
    return this.storage.get('total');
  }

  initialiser(){
    return this.storage.clear();
  }

}
