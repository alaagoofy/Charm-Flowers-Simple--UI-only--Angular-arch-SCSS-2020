import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CursorComponent } from './cursor/cursor.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [
    CursorComponent,
    ProductCardComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [
    CursorComponent,
    ProductCardComponent,
  ],
})
export class SharedModule { }
