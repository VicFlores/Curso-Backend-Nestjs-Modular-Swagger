import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const val = parseInt(value, 10);

    if (isNaN(val)) {
      throw new HttpException(
        `${value} is not an number`,
        HttpStatus.BAD_REQUEST,
      );
    }
    return val;
  }
}
