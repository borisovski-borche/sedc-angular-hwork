import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from '../components/cars/cars.component';
import { ContactComponent } from '../components/contact/contact.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { OrderedCarsComponent } from '../components/ordered-cars/ordered-cars.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'ordered-cars', component: OrderedCarsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  declarations: [],

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
