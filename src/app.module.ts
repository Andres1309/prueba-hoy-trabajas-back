import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { CartController } from './cart/cart.controller';
import { ProductsService } from './products/products.service';
import { CartService } from './cart/cart.service';

@Module({
  imports: [],
  controllers: [ProductsController, CartController],
  providers: [ProductsService, CartService],
})
export class AppModule {}
