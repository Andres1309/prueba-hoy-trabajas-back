import { Injectable } from '@nestjs/common';
import { ProductsService } from '../products/products.service';

@Injectable()
export class CartService {
  private cart: any[] = [];

  constructor(private readonly productsService: ProductsService) {}

  addToCart(productId: number) {
    const product = this.productsService.findOne(productId);

    if (product) {
      this.cart.push(product);
      return this.cart;
    }

    return null;
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter(item => item.id !== productId);
    return this.cart;
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    return this.cart;
  }
}
