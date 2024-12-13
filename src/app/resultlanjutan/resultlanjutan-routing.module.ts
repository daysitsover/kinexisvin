import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultlanjutanPage } from './resultlanjutan.page';

const routes: Routes = [
  {
    path: '',
    component: ResultlanjutanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultlanjutanPageRoutingModule {}
