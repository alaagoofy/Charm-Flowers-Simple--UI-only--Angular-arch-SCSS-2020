import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowProductComponent } from './show-product.component';


const routes: Routes = [
  {
    path: '', component: ShowProductComponent, children: [
        { path: '', component: ShowProductComponent },
  
    ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowProductRoutingModule { }
