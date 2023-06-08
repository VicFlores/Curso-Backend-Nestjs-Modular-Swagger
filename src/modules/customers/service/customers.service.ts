import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Customer } from '../customer.entity';
import { CreateCustomerDto } from '../customers.dto';

@Injectable()
export class CustomersService {
  private counterId = 1;
  private customers: Customer[] = [
    {
      id: 1,
      name: 'Billy',
      lastname: 'Valiente',
      phone: '34678654',
    },
    {
      id: 2,
      name: 'Camila',
      lastname: 'Strella',
      phone: '45672390',
    },
    {
      id: 3,
      name: 'Emily',
      lastname: 'Rose',
      phone: '12675245',
    },
  ];

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    const customer = this.customers.find((item) => item.id == id);

    if (!customer) {
      throw new HttpException(`Customer ${id} not found`, HttpStatus.NOT_FOUND);
    }

    return customer;
  }

  create(payload: CreateCustomerDto) {
    this.counterId++;
    const newCustomer = {
      id: this.counterId,
      ...payload,
    };

    this.customers.push(newCustomer);

    return newCustomer;
  }

  remove(id: number) {
    const index = this.customers.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new HttpException(`Customer ${id} not found`, HttpStatus.NOT_FOUND);
    }
    this.customers.splice(index, 1);
    return true;
  }
}
