import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';

import { NoFhLayoutComponent } from '../layout/no-fh-layout/no-fh-layout.component';
import { SettingsComponent } from './settings.component';


const routes: Routes = [
  {
    path: 'settings',
    component: MainLayoutComponent,
    children: [
      { path: '', component: SettingsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SettingsRoutingModule { }
