import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercisesDetailComponent } from './exercises-detail.component';
import { ExercisesDetailRoutingModule } from './exercises-detail-routing.module';



@NgModule({
  declarations: [ExercisesDetailComponent],
  imports: [
    CommonModule,
    ExercisesDetailRoutingModule
  ]
})
export class ExercisesDetailModule { }
