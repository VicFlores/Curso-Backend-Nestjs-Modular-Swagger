import { Module } from '@nestjs/common';
import { BrandsController } from './controller/brands.controller';
import { BrandsService } from './service/brands.service';

@Module({
  imports: [],
  controllers: [BrandsController],
  providers: [BrandsService],
})
export class BrandsModule {}
