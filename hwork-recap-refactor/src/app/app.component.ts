import { Component } from '@angular/core';
import { Car } from './interfaces/car';
import { Order } from './interfaces/order';
import { DataService } from './services/data-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'recap-class';
  carToDisplay: Car;
 
  constructor(private dataService: DataService){
  }

  subscription = this.dataService.displayCarSubject.subscribe(car => this.carToDisplay = car)

  orders: Order[] = this.dataService.fetchOrders()
  

}
