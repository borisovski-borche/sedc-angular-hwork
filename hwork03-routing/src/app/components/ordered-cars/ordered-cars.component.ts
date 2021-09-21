import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-ordered-cars',
  templateUrl: './ordered-cars.component.html',
  styleUrls: ['./ordered-cars.component.scss'],
})
export class OrderedCarsComponent implements OnInit {
  orderedCars: Car[];

  constructor(private carsService: CarsService) {}

  onClearOrder() {
    this.carsService.clearOrderedCars();
  }

  ngOnInit(): void {
    this.orderedCars = this.carsService.fetchOrderedCars();
  }
}
