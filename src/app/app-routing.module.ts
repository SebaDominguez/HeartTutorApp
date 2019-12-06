import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'happy',
    loadChildren: () => import('./pages/happy/happy.module').then(m => m.HappyPageModule)
  },   {
    path: 'sad',
    loadChildren: () => import('./pages/sad/sad.module').then( m => m.SadPageModule)
  },
  {
    path: 'angry',
    loadChildren: () => import('./pages/angry/angry.module').then( m => m.AngryPageModule)
  },
  {
    path: 'depressed',
    loadChildren: () => import('./pages/depressed/depressed.module').then( m => m.DepressedPageModule)
  },
  {
    path: 'indifferent',
    loadChildren: () => import('./pages/indifferent/indifferent.module').then( m => m.IndifferentPageModule)
  },
  {
    path: 'data-base',
    loadChildren: () => import('./pages/data-base/data-base.module').then( m => m.DataBasePageModule)
  },
  {
    path: 'db',
    loadChildren: () => import('./pages/db/db.module').then( m => m.DbPageModule)
  },
  {
    path: 'database',
    loadChildren: () => import('./pages/database/database.module').then( m => m.DatabasePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
