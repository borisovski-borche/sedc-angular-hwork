import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../interfaces/car';
import { CarBrand } from '../interfaces/car-brand';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  selectedCars: Car[] = [];
  cars: Car[];

  constructor(private http: HttpClient) {}

  carsChangedSubject = new Subject<Car[]>();

  apiUrl = 'https://json-server-boris.herokuapp.com/api/cars';

  fetchOrderedCars() {
    return this.selectedCars;
  }

  clearOrderedCars() {
    this.selectedCars.forEach((car) => (car.ordered = false));
    this.selectedCars = [];
  }

  getCars() {
    return this.cars;
  }

  fetchCars() {
    return this.http
      .get<{ cars: Car[] }>(this.apiUrl)
      .pipe(map((response) => response.cars))
      .subscribe((cars) => {
        this.cars = cars;
        this.carsChangedSubject.next(cars);
      });
  }

  orderCar(car: Car) {
    if (car.inStock) {
      if (this.selectedCars.find((arrCar) => arrCar.id === car.id)) return;
      this.selectedCars = [...this.selectedCars, car];
    }
  }
}
