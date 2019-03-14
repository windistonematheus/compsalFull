import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConsultarAtletaPage } from './consultar-atleta.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarAtletaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConsultarAtletaPage]
})
export class ConsultarAtletaPageModule {}
