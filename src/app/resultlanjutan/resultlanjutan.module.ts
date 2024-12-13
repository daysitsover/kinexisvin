import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultlanjutanPageRoutingModule } from './resultlanjutan-routing.module';

import { ResultlanjutanPage } from './resultlanjutan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultlanjutanPageRoutingModule,
  ],
  declarations: [ResultlanjutanPage],
})
export class ResultlanjutanPageModule {
  // isPopupOpen = false;

  // openPopup() {
  //   this.isPopupOpen = true;
  // }

  // closePopup() {
  //   this.isPopupOpen = false;
  // }
}
