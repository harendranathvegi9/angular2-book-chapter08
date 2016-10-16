import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { CarDetailComponent }    from './car-detail.component';
import { CarFormComponent }  from './car-form.component';
import { CarsListComponent }  from './cars-list.component';

import { carsRouting } from './cars.routing';

import { CarService } from './car.service';
import { FakeCarService } from './fake-car.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    carsRouting
  ],
  declarations: [
    CarDetailComponent,
    CarFormComponent,
    CarsListComponent
  ],
  providers: [
    { provide: CarService, useClass: CarService}
  ]
})
export class CarModule {}
