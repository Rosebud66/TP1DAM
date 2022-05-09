import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectComponent } from './subject.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';




@NgModule({
  declarations: [SubjectComponent],
  imports: [
    CommonModule,
    SubjectRoutingModule,
    ScrollPanelModule
  ]
})
export class SubjectModule { }
