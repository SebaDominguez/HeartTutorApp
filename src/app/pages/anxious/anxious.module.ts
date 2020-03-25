import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnxiousPageRoutingModule } from './anxious-routing.module';

import { AnxiousPage } from './anxious.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnxiousPageRoutingModule
  ],
  declarations: [AnxiousPage]
})
export class AnxiousPageModule {}
