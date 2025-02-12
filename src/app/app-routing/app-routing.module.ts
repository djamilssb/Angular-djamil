import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CartComponent } from '../cart/cart.component';
import { RouterLink } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';

const routes: Routes = [
  { path: '', redirectTo: '/product-list', pathMatch: 'full' },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, RouterLink]
})
export class AppRoutingModule { }
