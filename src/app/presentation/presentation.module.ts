import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PresentationPage } from './presentation.page';
import {environment} from '../../environments/environment.prod';

const routes: Routes = [
  {
    path: '',
    component: PresentationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PresentationPage]
})
export class PresentationPageModule{

}
