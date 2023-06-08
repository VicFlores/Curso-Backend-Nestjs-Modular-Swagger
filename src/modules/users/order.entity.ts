import { Product } from '../products/products.entity';
import { User } from './user.entities';

export class Order {
  date: Date;
  user: User;
  products: Product[];
}
