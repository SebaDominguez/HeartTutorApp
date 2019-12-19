import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {    path: 'home',  loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)},
  {    path: 'list',  loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)},
  {    path: 'happy',  loadChildren: () => import('./pages/happy/happy.module').then(m => m.HappyPageModule)},
  {    path: 'sad',  loadChildren: () => import('./pages/sad/sad.module').then( m => m.SadPageModule)},
  {    path: 'angry',  loadChildren: () => import('./pages/angry/angry.module').then( m => m.AngryPageModule)},
  {    path: 'depressed',  loadChildren: () => import('./pages/depressed/depressed.module').then( m => m.DepressedPageModule)},
  {    path: 'indifferent',  loadChildren: () => import('./pages/indifferent/indifferent.module').then( m => m.IndifferentPageModule)},
  {    path: 'database', loadChildren: () => import('./pages/database/database.module').then( m => m.DatabasePageModule) },
  {    path: 'database/:id', loadChildren: () => import('./pages/database/database.module').then( m => m.DatabasePageModule) },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
