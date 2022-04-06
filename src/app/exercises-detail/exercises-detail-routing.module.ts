import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';

import { ExercisesDetailComponent } from './exercises-detail.component';

const routes: Routes = [
  {
    path: 'detail',
    component: MainLayoutComponent,
    children: [
      { path: '', component: ExercisesDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ExercisesDetailRoutingModule { }
