import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  addToCart(@Body() body: { productId: number }) {
    return this.cartService.addToCart(body.productId);
  }

  @Get()
  getCart() {
    return this.cartService.getCart();
  }

  @Delete(':id')
  removeFromCart(@Param('id') id: string) {
    return this.cartService.removeFromCart(+id);
  }

  @Delete()
  clearCart() {
    return this.cartService.clearCart();
  }
}
