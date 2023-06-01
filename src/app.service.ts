import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Vic';
  }

  newVic(): string {
    return 'Soy un nuevo Vic';
  }

  getProduct(productId: number): object {
    return { message: `Mi producto tiene el id: ${productId}` };
  }

  getCategories(categoriesId: number, productId: number): object {
    return {
      message: `Categoria ID: ${categoriesId} Productos ID: ${productId}`,
    };
  }

  getProducts(limit: number, offset: number): object {
    return { message: `Limit: ${limit} Offset: ${offset}` };
  }
}
