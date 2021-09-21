import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../interfaces/car';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  cars: Car[];

  constructor(private http: HttpClient) {}

  carsChangedSubject = new Subject<Car[]>();

  apiUrl = 'https://json-server-boris.herokuapp.com/api/cars';

  fetchOrderedCars() {
    return this.cars.filter((car) => car.ordered);
  }

  clearOrderedCars() {
    this.cars.forEach((car) => (car.ordered = false));
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
    car.ordered = true;
  }
}
