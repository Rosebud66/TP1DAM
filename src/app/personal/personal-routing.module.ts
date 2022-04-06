import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';

import { NoFhLayoutComponent } from '../layout/no-fh-layout/no-fh-layout.component';
import { PersonalComponent } from './personal.component';

const routes: Routes = [
  {
    path: 'personal',
    component: MainLayoutComponent,
    children: [
      { path: '', component: PersonalComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PersonalRoutingModule { }
