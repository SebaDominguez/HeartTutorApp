import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AngryPageRoutingModule } from './angry-routing.module';

import { AngryPage } from './angry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngryPageRoutingModule
  ],
  declarations: [AngryPage]
})
export class AngryPageModule {}
