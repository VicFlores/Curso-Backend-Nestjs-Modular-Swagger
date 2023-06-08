import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from 'config';

@Injectable()
export class AppService {
  constructor(
    @Inject('TASK') private task: any,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  getHello(): string {
    /* console.log(this.task); */
    return `This is an API KEY value: ${this.configService.apiKey},
    this is a DB NAME: ${this.configService.database.name}`;
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
