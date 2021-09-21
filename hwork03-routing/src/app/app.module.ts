import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';
import { OrderedCarsComponent } from './components/ordered-cars/ordered-cars.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { CarDetailComponent } from './components/cars/car-detail/car-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    OrderedCarsComponent,
    ContactComponent,
    NotFoundComponent,
    HomeComponent,
    CarDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
