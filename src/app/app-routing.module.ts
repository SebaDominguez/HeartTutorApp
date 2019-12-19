import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {    path: 'home',  loadChildren: () => import('./home/home.module').then(m => m.HomePageModule), canActivate: [AuthGuard]},
  {    path: 'list',  loadChildren: () => import('./list/list.module').then(m => m.ListPageModule), canActivate: [AuthGuard]},
  {    path: 'happy',  loadChildren: () => import('./pages/happy/happy.module').then(m => m.HappyPageModule), canActivate: [AuthGuard]},
  {    path: 'sad',  loadChildren: () => import('./pages/sad/sad.module').then( m => m.SadPageModule), canActivate: [AuthGuard]},
  {    path: 'angry',  loadChildren: () => import('./pages/angry/angry.module').then( m => m.AngryPageModule), canActivate: [AuthGuard]},
  {    path: 'depressed',  loadChildren: () => import('./pages/depressed/depressed.module').then( m => m.DepressedPageModule), canActivate: [AuthGuard]},
  {    path: 'indifferent',  loadChildren: () => import('./pages/indifferent/indifferent.module').then( m => m.IndifferentPageModule), canActivate: [AuthGuard]},
  {    path: 'database', loadChildren: () => import('./pages/database/database.module').then( m => m.DatabasePageModule), canActivate: [AuthGuard] },
  {    path: 'database/:id', loadChildren: () => import('./pages/database/database.module').then( m => m.DatabasePageModule) , canActivate: [AuthGuard]},
  {    path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)},
  {    path: 'register', loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)}


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
