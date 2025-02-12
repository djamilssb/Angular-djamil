import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

export const routes: Routes = [
  { path: 'product-list', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
  { path: '', redirectTo: '/product-list', pathMatch: 'full' },
  { path: '**', redirectTo: '/product-list', pathMatch: 'full' }
];