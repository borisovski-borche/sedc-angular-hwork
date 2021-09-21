import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderedCarsComponent } from './ordered-cars.component';

describe('OrderedCarsComponent', () => {
  let component: OrderedCarsComponent;
  let fixture: ComponentFixture<OrderedCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderedCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderedCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
