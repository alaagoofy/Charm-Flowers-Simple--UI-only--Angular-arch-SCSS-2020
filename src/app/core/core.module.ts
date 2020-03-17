import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InnerHeaderComponent } from './inner-header/inner-header.component';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    HomeComponent,
     HeaderComponent,
     FooterComponent,
     InnerHeaderComponent,
     SearchComponent
    ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    InnerHeaderComponent,
    SearchComponent
  ],
})
export class CoreModule { }
