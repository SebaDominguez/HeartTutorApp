import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HappyPage } from './happy.page';

const routes: Routes = [
  {
    path: '',
    component: HappyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HappyPageRoutingModule {}
