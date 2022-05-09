import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaComponent } from './area.component';
import { AreaRoutingModule } from './area-routing.module';
import { ScrollPanelModule } from 'primeng/scrollpanel';





@NgModule({
  declarations: [AreaComponent],
  imports: [
    CommonModule,
    AreaRoutingModule,
    ScrollPanelModule
  ]
})
export class AreaModule { }
