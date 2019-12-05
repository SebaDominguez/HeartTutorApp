import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HappyPageRoutingModule } from './happy-routing.module';

import { HappyPage } from './happy.page';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    HappyPageRoutingModule,
    IonicStorageModule.forRoot(),
  ],
  declarations: [HappyPage]
})
export class HappyPageModule {}
