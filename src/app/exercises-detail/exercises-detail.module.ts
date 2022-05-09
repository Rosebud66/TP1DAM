import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercisesDetailComponent } from './exercises-detail.component';
import { ExercisesDetailRoutingModule } from './exercises-detail-routing.module';

import { OverlayPanelModule } from 'primeng/overlaypanel';

import {CardModule} from 'primeng/card';
import {ScrollPanelModule} from 'primeng/scrollpanel';

import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';



@NgModule({
  declarations: [ExercisesDetailComponent],
  imports: [
    CommonModule,
    ExercisesDetailRoutingModule,
    OverlayPanelModule,
    CardModule,
    ScrollPanelModule,
    MessagesModule,
    MessageModule
  ]
})
export class ExercisesDetailModule { }
