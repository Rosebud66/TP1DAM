import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercisesComponent } from './exercises.component';
import { ExercisesRoutingModule } from './exercises-routing.module';
import { ScrollPanelModule } from 'primeng/scrollpanel';



@NgModule({
  declarations: [ExercisesComponent],
  imports: [
    CommonModule,
    ExercisesRoutingModule,
    ScrollPanelModule
  ]
})
export class ExercisesModule { }
