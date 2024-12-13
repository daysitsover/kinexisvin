import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Kinexis1Page } from './kinexis1.page';

const routes: Routes = [
  {
    path: '',
    component: Kinexis1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Kinexis1PageRoutingModule {}
