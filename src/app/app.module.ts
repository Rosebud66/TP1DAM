import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
// Módulo Layout con las 2 plantillas. Limpia (login) y con header navbar footer
import { LayoutModule } from './layout/layout.module';

import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';


import { PersonalModule } from './personal/personal.module';

import { SubjectModule } from './subject/subject.module';
import { AreaModule } from './area/area.module';
import { ExercisesModule } from './exercises/exercises.module';
import { ExercisesDetailModule } from './exercises-detail/exercises-detail.module';






const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    
    LayoutModule,
    
    LoginModule,
    RegisterModule,
    
    PersonalModule,
    
    SubjectModule,
    AreaModule,
    ExercisesModule,
    ExercisesDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
