import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dto/products.dto';
import { Product } from 'src/entities/products.entities';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Descript 1',
      price: 23,
      stock: 45,
      image: 'imageurl',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Descript 2',
      price: 56,
      stock: 67,
      image: 'imageurl',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Descript 3',
      price: 78,
      stock: 32,
      image: 'imageurl',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id == id);

    if (!product) {
      throw new HttpException(`Product ${id} not found`, HttpStatus.NOT_FOUND);
    }

    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId++;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };

    this.products.push(newProduct);

    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);

    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = { ...product, ...payload };
      return this.products[index];
    }

    return null;
  }

  remove(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new HttpException(`Product ${id} not found`, HttpStatus.NOT_FOUND);
    }
    this.products.splice(index, 1);
    return true;
  }
}
