import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'presentation', loadChildren: './presentation/presentation.module#PresentationPageModule' },
  { path: 'produit', loadChildren: './produit/produit.module#ProduitPageModule' },
  { path: 'rse', loadChildren: './rse/rse.module#RsePageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'commande', loadChildren: './commande/commande.module#CommandePageModule' },
    { path: 'commande/:type', loadChildren: './commande/commande.module#CommandePageModule' },
  { path: 'commande-detail/detail', loadChildren: './commande-detail/commande-detail.module#CommandeDetailPageModule' },
  { path: 'fondation', loadChildren: './fondation/fondation.module#FondationPageModule' },
  { path: 'distributeur', loadChildren: './distributeur/distributeur.module#DistributeurPageModule' },
  { path: 'actualite', loadChildren: './actualite/actualite.module#ActualitePageModule' },
    { path: 'message', loadChildren: './message/message.module#MessagePageModule' },
  { path: 'position', loadChildren: './position/position.module#PositionPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
