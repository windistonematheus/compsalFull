import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConsultarSumulaPage } from './consultar-sumula.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarSumulaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConsultarSumulaPage]
})
export class ConsultarSumulaPageModule {}
