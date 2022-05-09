import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalComponent } from './personal.component';
import { PersonalRoutingModule } from './personal-routing.module';
import { ChartModule } from 'primeng/chart';




@NgModule({
  declarations: [PersonalComponent],
  imports: [
    CommonModule,
    ChartModule,
    PersonalRoutingModule,
  ]
})
export class PersonalModule { }
