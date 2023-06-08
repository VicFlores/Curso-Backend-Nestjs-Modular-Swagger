import { Module } from '@nestjs/common';
import { CustomersController } from './controller/customers.controller';
import { CustomersService } from './service/customers.service';

@Module({
  imports: [],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomerModule {}
