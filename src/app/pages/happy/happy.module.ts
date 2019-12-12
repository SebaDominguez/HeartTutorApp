import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HappyPageRoutingModule } from './happy-routing.module';

import { HappyPage } from './happy.page';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

    
    HappyPageRoutingModule,

  ],
  declarations: [HappyPage]
})
export class HappyPageModule {}
