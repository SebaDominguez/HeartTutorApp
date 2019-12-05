import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndifferentPageRoutingModule } from './indifferent-routing.module';

import { IndifferentPage } from './indifferent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndifferentPageRoutingModule
  ],
  declarations: [IndifferentPage]
})
export class IndifferentPageModule {}
