import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Car} from './car';

import * as _ from 'underscore';

@Injectable()
export class CarService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private _backendUrl = 'http://localhost:8080/api';
  constructor(private http: Http) {}
  getCars() {
    return this.http.get(this._backendUrl + '/cars')
                      .toPromise()
                      .then(response => response.json() as Car[])
                      .catch(this.handleError);
  }
  getCar(id:string) {
    return this.http.get(this._backendUrl + '/cars/' + id)
                    .toPromise()
                    .then(response => response.json() as Car)
                    .catch(this.handleError);
  }
  addCar(newCar: Car) {
     return this.http
                .post(this._backendUrl + '/cars', JSON.stringify(newCar), {headers: this.headers})
                .toPromise()
                .then(res => res.json().data)
                .catch(this.handleError);
  }
  private handleError (error: any) {
    console.error(error);
    return Promise.reject(error.message || error);
  }
}
