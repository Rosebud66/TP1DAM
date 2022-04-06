import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';

import { NoFhLayoutComponent } from '../layout/no-fh-layout/no-fh-layout.component';
import { AreaComponent } from './area.component';


const routes: Routes = [
  {
    path: 'area',
    component: MainLayoutComponent,
    children: [
      { path: '', component: AreaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AreaRoutingModule { }
