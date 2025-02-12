import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-search',
  standalone: true,
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css'],
  imports: [FormsModule, NgFor]
})
export class ProductSearchComponent implements OnInit {
  query: string = '';
  results: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  search(): void {
    if (this.query.trim() === '') {
      this.results = [];
    } else {
      this.results = this.productService.searchProducts(this.query);
    }
  }
}
