import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Brand } from '../brand.entity';
import { CreateBrandDto } from '../brand.dto';

@Injectable()
export class BrandsService {
  private counterId = 3;
  private brands: Brand[] = [
    {
      id: 1,
      name: 'Adaidas',
      image: 'google.com',
    },
    {
      id: 2,
      name: 'Pumba',
      image: 'facebook.com',
    },
    {
      id: 3,
      name: 'Kike',
      image: 'messenger.com',
    },
  ];

  findAll() {
    return this.brands;
  }

  findOne(id: number) {
    const brand = this.brands.find((item) => item.id === id);

    if (!brand) {
      throw new HttpException(`Brand ${id} not found`, HttpStatus.NOT_FOUND);
    }

    return brand;
  }

  create(payload: CreateBrandDto) {
    this.counterId++;

    const newBrand = {
      id: this.counterId,
      ...payload,
    };

    this.brands.push(newBrand);

    return newBrand;
  }

  remove(id: number) {
    const index = this.brands.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new HttpException(`Brand ${id} not found`, HttpStatus.NOT_FOUND);
    }

    this.brands.splice(index, 1);
    return {
      messsage: 'Brand was removed',
    };
  }
}
