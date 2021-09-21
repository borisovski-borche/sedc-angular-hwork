import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss'],
})
export class CarDetailComponent implements OnInit {
  @Input() car: Car;
  isOrdered = false;

  constructor(private carsService: CarsService) {}

  onCarOrder() {
    this.car.ordered = true;
    this.carsService.orderCar(this.car);
  }

  ngOnInit(): void {}
}
