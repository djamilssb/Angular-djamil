import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [NgFor, RouterModule, RouterLink]
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addToCart(product: any): void {
    this.productService.addToCart(product);
    alert(`${product.name} a été ajouté au panier!`);
  }
}
