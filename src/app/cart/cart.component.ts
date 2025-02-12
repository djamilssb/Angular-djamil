import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [NgFor, RouterModule]
})
export class CartComponent implements OnInit {
  cart: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.cart = this.productService.getCart();
  }

  removeFromCart(product: any): void {
    this.productService.removeFromCart(product);
  }

  clearCart(): void {
    this.productService.clearCart();
    this.cart = [];
  }
}
