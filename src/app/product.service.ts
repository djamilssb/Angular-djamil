import { Injectable } from '@angular/core';
interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description : string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Goku', price: 30, imageUrl: 'https://m.media-amazon.com/images/I/81e7eQ6qMDL.jpg', description: 'Goku Super Saiyan' },
    { id: 2, name: 'Vegeta', price: 25, imageUrl: 'https://www.kamehashop.fr/30189-large_default/figurine-majin-vegeta-dokkan-battle-collab-ver.jpg', description: 'Description de Vegeta' },
    { id: 3, name: 'Piccolo', price: 20, imageUrl: 'https://100pour100figurines.fr/cdn/shop/files/59412_1445x.jpg?v=1728481911', description: 'Description de Piccolo' }
  ];

  private cart: Product[] = [];

  getProducts(): Product[] {
    return this.products;
  }

  getCart(): Product[] {
    return this.cart;
  }

  addToCart(product: Product): void {
    this.cart.push(product);
  }

  removeFromCart(product: Product): void {
    const index = this.cart.indexOf(product);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }

  clearCart(): void {
    this.cart = [];
  }

  searchProducts(query: string): Product[] {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }
}