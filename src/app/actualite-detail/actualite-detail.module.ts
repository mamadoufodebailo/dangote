import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActualiteDetailPage } from './actualite-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ActualiteDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ActualiteDetailPage]
})
export class ActualiteDetailPageModule {}
