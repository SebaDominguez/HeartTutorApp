import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngryPage } from './angry.page';

const routes: Routes = [
  {
    path: '',
    component: AngryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngryPageRoutingModule {}
