import { Component, Input, OnInit, } from '@angular/core';
import { Car } from 'src/app/interfaces/car';
import { Order } from 'src/app/interfaces/order';
import { DataService } from 'src/app/services/data-service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  @Input() boundOrder: Order;

  constructor(private dataService: DataService) {}

  
  displayCar(car: Car) {
    this.dataService.displayCarSubject.next(car)
  }
  
  ngOnInit(): void {
   
  }
}
