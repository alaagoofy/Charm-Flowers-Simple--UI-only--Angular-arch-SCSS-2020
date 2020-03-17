import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent , pathMatch: 'full' },
  {
    path: 'flowers',
    loadChildren: () => import('./flowers/flowers.module').then(m => m.FlowersModule)
  },
  {
    path: 'flower/4',
    loadChildren: () => import('./show-product/show-product.module').then(m => m.ShowProductModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
