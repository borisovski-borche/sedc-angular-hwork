import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CarsService } from './services/cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private carsService: CarsService) {}

  subscription: Subscription;
  ngOnInit() {
    this.subscription = this.carsService.fetchCars();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
