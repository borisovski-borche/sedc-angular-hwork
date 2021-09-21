import { CarBrand } from './car-brand';

export interface Car {
  id: number;
  brand: CarBrand;
  model: String;
  yearOfProduction: string;
  inStock: boolean;
  ordered?: boolean;
}
