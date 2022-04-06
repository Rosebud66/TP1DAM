import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoFhLayoutComponent } from './no-fh-layout/no-fh-layout.component';
import { RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    NoFhLayoutComponent,
    MainLayoutComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    FlexLayoutModule
  ],
  exports: [
    MainLayoutComponent,
    NoFhLayoutComponent
  ]
})
export class LayoutModule { }
