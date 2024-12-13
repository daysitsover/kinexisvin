import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'kinexis1',
    loadChildren: () =>
      import('./kinexis1/kinexis1.module').then((m) => m.Kinexis1PageModule),
  },
  {
    path: 'page3',
    loadChildren: () =>
      import('./page3/page3.module').then((m) => m.Page3PageModule),
  },
  {
    path: 'page4',
    loadChildren: () =>
      import('./page4/page4.module').then((m) => m.Page4PageModule),
  },
  {
    path: 'page5',
    loadChildren: () =>
      import('./page5/page5.module').then((m) => m.Page5PageModule),
  },
  {
    path: 'page6',
    loadChildren: () =>
      import('./page6/page6.module').then((m) => m.Page6PageModule),
  },
  {
    path: 'page7',
    loadChildren: () =>
      import('./page7/page7.module').then((m) => m.Page7PageModule),
  },
  {
    path: 'page8',
    loadChildren: () =>
      import('./page8/page8.module').then((m) => m.Page8PageModule),
  },
  {
    path: 'page9',
    loadChildren: () =>
      import('./page9/page9.module').then((m) => m.Page9PageModule),
  },
  {
    path: 'upload',
    loadChildren: () =>
      import('./upload/upload.module').then((m) => m.UploadPageModule),
  },
  {
    path: 'history',
    loadChildren: () =>
      import('./history/history.module').then((m) => m.HistoryPageModule),
  },
  {
    path: 'contoh',
    loadChildren: () =>
      import('./contoh/contoh.module').then((m) => m.ContohPageModule),
  },
  {
    path: 'resultdata',
    loadChildren: () =>
      import('./resultdata/resultdata.module').then(
        (m) => m.ResultdataPageModule
      ),
  },
  {
    path: 'resultlanjutan',
    loadChildren: () =>
      import('./resultlanjutan/resultlanjutan.module').then(
        (m) => m.ResultlanjutanPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
