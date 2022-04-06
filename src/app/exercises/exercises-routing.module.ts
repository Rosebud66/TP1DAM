import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';

import { NoFhLayoutComponent } from '../layout/no-fh-layout/no-fh-layout.component';
import { ExercisesComponent } from './exercises.component';

const routes: Routes = [
  {
    path: 'exercises',
    component: MainLayoutComponent,
    children: [
      { path: '', component: ExercisesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ExercisesRoutingModule { }
