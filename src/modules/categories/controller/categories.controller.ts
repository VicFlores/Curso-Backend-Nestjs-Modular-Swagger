import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateCategoriesDto } from '../categories.dto';
import { CategoriesService } from '../service/categories.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  getCategories() {
    return this.categoriesService.findAll();
  }

  @Get(':categoriesId')
  getCategory(
    @Param('categoriesId', ParseIntPipe) categoriesId: number,
    /* @Param('productId') productId: number, */
  ) {
    return this.categoriesService.findOne(categoriesId);
  }

  @Post()
  create(@Body() payload: CreateCategoriesDto) {
    return this.categoriesService.create(payload);
  }

  @Delete(':categoriesId')
  delete(@Param('categoriesId', ParseIntPipe) categoriesId: number) {
    return this.categoriesService.remove(categoriesId);
  }
}
