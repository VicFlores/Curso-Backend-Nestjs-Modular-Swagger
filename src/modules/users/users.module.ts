import { Module } from '@nestjs/common';
import { UsersController } from './controller/users.controller';
import { UsersService } from './service/users.service';
import { ProductsModule } from '../products/products.module';
import { ProductsService } from '../products/service/products.service';

@Module({
  imports: [ProductsModule],
  controllers: [UsersController],
  providers: [UsersService, ProductsService],
})
export class UsersModule {}
