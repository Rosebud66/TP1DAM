import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { NoFhLayoutComponent } from '../layout/no-fh-layout/no-fh-layout.component';
import { LoginComponent } from './login.component';


const routes: Routes = [
  {
    path: 'login',
    component: NoFhLayoutComponent,
    children: [
      { path: '', component: LoginComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LoginRoutingModule { }
