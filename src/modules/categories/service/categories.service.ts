import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Category } from '../categories.entity';
import { CreateCategoriesDto } from '../categories.dto';

@Injectable()
export class CategoriesService {
  private counterId = 3;
  private categories: Category[] = [
    {
      id: 1,
      name: 'Shoes',
    },
    {
      id: 2,
      name: 'Pants',
    },
    {
      id: 3,
      name: 'Glasses',
    },
  ];

  findAll() {
    return this.categories;
  }

  findOne(id: number) {
    const category = this.categories.find((item) => item.id == id);

    if (!category) {
      throw new HttpException(`Category ${id} not found`, HttpStatus.NOT_FOUND);
    }

    return category;
  }

  create(payload: CreateCategoriesDto) {
    this.counterId++;
    const newCategory = {
      id: this.counterId,
      ...payload,
    };

    this.categories.push(newCategory);

    return newCategory;
  }

  remove(id: number) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new HttpException(`Category ${id} not found`, HttpStatus.NOT_FOUND);
    }
    this.categories.splice(index, 1);

    return true;
  }
}
