import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Kinexis1PageRoutingModule } from './kinexis1-routing.module';

import { Kinexis1Page } from './kinexis1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Kinexis1PageRoutingModule
  ],
  declarations: [Kinexis1Page]
})
export class Kinexis1PageModule {}
