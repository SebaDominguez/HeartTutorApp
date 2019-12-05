import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepressedPageRoutingModule } from './depressed-routing.module';

import { DepressedPage } from './depressed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepressedPageRoutingModule
  ],
  declarations: [DepressedPage]
})
export class DepressedPageModule {}
