import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import {CheckboxModule} from 'primeng/checkbox';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ScrollPanelModule,
    CheckboxModule
  ]
})
export class SettingsModule { }