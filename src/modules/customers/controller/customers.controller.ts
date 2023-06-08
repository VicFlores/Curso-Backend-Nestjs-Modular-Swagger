import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';

import { CustomersService } from 'src/modules/customers/service/customers.service';
import { CreateCustomerDto } from '../customers.dto';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  getCustomers() {
    return this.customersService.findAll();
  }

  @Get(':customerId')
  getCustomer(@Param('customerId', ParseIntPipe) customerId: number) {
    return this.customersService.findOne(customerId);
  }

  @Post()
  create(@Body() payload: CreateCustomerDto) {
    return this.customersService.create(payload);
  }

  @Delete(':customerId')
  delete(@Param('customerId', ParseIntPipe) customerId: number) {
    return this.customersService.remove(customerId);
  }
}
