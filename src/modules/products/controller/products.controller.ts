import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  /* Query, */
} from '@nestjs/common';

import { ProductsService } from 'src/modules/products/service/products.service';
import { CreateProductDto, UpdateProductDto } from '../products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  getProducts(/* @Query('limit') limit = 100, @Query('offset') offset = 0 */) {
    /* return this.appService.getProducts(limit, offset); */
    return this.productService.findAll();
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    /* return this.appService.getProduct(productId); */
    return this.productService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    /*  return {
      status: 'ok',
      message: 'Accion crear',
      payload,
    }; */

    return this.productService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    /* return {
      status: 'ok',
      id,
      message: 'Accion editar',
      payload,
    }; */

    this.productService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productService.remove(id);
  }
}
