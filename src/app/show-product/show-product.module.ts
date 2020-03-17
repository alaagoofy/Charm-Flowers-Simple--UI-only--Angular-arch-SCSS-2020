import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowProductRoutingModule } from './show-product-routing.module';
import { ZoomSliderComponent } from './zoom-slider/zoom-slider.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ShowProductComponent } from './show-product.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    ZoomSliderComponent,
     ProductInfoComponent, 
     ShowProductComponent
    ],
  imports: [
    CommonModule,
    ShowProductRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class ShowProductModule { }
