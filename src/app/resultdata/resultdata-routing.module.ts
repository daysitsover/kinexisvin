import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultdataPage } from './resultdata.page';

const routes: Routes = [
  {
    path: '',
    component: ResultdataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultdataPageRoutingModule {}
