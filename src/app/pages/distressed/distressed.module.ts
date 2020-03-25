import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistressedPageRoutingModule } from './distressed-routing.module';

import { DistressedPage } from './distressed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistressedPageRoutingModule
  ],
  declarations: [DistressedPage]
})
export class DistressedPageModule {}
