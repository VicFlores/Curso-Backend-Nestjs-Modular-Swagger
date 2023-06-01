import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly appService: AppService) {}

  @Get(':categoriesId/products/:productId')
  getCategories(
    @Param('categoriesId') categoriesId: number,
    @Param('productId') productId: number,
  ) {
    return this.appService.getCategories(categoriesId, productId);
  }
}
