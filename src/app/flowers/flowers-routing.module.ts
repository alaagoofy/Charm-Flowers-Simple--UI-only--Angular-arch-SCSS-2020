import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlowersComponent } from './flowers.component';


const routes: Routes = [
  {
    path: '', component: FlowersComponent, children: [
        { path: '', component: FlowersComponent },
  
    ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlowersRoutingModule { }
