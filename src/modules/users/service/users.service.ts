import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { User } from '../user.entities';
import { CreateUserDto } from '../users.dto';
import { ProductsService } from 'src/modules/products/service/products.service';
import { Order } from '../order.entity';

@Injectable()
export class UsersService {
  constructor(
    private productsService: ProductsService,
    private configService: ConfigService,
  ) {}
  private counterId = 3;
  private users: User[] = [
    {
      id: 1,
      email: 'vicflores@gmail.com',
      password: 'polloslocos2211',
      role: 'estandar',
    },
    {
      id: 2,
      email: 'katherine@gmail.com',
      password: 'gatostraviesos3456',
      role: 'estandar',
    },
    {
      id: 3,
      email: 'stephanie@gmail.com',
      password: 'zanahoriaconejo490',
      role: 'estandar',
    },
  ];

  findAll() {
    const apiKey = this.configService.get('API_KEY');
    const dbName = this.configService.get('DATABASE_NAME');
    console.log(apiKey, dbName);
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((item) => item.id == id);

    if (!user) {
      throw new HttpException(`User ${id} not found`, HttpStatus.NOT_FOUND);
    }

    return user;
  }

  create(payload: CreateUserDto) {
    this.counterId++;
    const newUser = {
      id: this.counterId,
      ...payload,
    };

    this.users.push(newUser);

    return newUser;
  }

  remove(id: number) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new HttpException(`User ${id} not found`, HttpStatus.NOT_FOUND);
    }
    this.users.splice(index, 1);
    return true;
  }

  getOrderByUser(id: number): Order {
    const user = this.findOne(id);
    return {
      date: new Date(),
      user,
      products: this.productsService.findAll(),
    };
  }
}
