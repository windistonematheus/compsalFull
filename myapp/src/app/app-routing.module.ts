import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'feed', loadChildren: './feed/feed.module#FeedPageModule' },
  { path: 'consultar-sumula', loadChildren: './consultar-sumula/consultar-sumula.module#ConsultarSumulaPageModule' },
  { path: 'consultar-atleta', loadChildren: './consultar-atleta/consultar-atleta.module#ConsultarAtletaPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
