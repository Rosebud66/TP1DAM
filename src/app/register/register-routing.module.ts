import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { NoFhLayoutComponent } from '../layout/no-fh-layout/no-fh-layout.component';
import { RegisterComponent } from './register.component';



const routes: Routes = [
  {
    path: 'register',
    component: NoFhLayoutComponent,
    children: [
      { path: '', component: RegisterComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RegisterRoutingModule { }
