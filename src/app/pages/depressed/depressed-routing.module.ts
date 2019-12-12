import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepressedPage } from './depressed.page';

const routes: Routes = [
  {
    path: '',
    component: DepressedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepressedPageRoutingModule {}
