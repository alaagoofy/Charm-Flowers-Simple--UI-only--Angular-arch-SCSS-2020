import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlowersRoutingModule } from './flowers-routing.module';
import { FlowersComponent } from './flowers.component';
import { FilterComponent } from './filter/filter.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FlowersComponent,
     FilterComponent
    ],
  imports: [
    CommonModule,
    FlowersRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class FlowersModule { }
