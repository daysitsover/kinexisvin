import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultdataPageRoutingModule } from './resultdata-routing.module';

import { ResultdataPage } from './resultdata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultdataPageRoutingModule
  ],
  declarations: [ResultdataPage]
})
export class ResultdataPageModule {}
