import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';

import { NoFhLayoutComponent } from '../layout/no-fh-layout/no-fh-layout.component';
import { SubjectComponent } from './subject.component';


const routes: Routes = [
  {
    path: 'subject',
    component: MainLayoutComponent,
    children: [
      { path: '', component: SubjectComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SubjectRoutingModule { }
