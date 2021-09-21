import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Car } from 'src/app/interfaces/car';
import { CarBrand } from 'src/app/interfaces/car-brand';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit, OnDestroy {
  cars: Car[];

  subscription: Subscription;

  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    this.cars = this.carsService.getCars();

    this.subscription = this.carsService.carsChangedSubject.subscribe(
      (cars) => {
        this.cars = cars;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
