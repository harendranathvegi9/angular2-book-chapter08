import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Car} from './car';
import {Observable} from 'rxjs/Observable';
import * as _ from 'underscore';

@Injectable()
export class CarService {
  private _backendUrl = 'http://meteor-117867.nitrousapp.com:8080/api';
  constructor(private http: Http) {}
  getCars() {
    return this.http.get(this._backendUrl + '/cars')
                    .map(res => <Car[]> res.json())
                    .catch(this.handleError)
                    .toPromise();
  }
  getCar(id:string) {
    return this.http.get(this._backendUrl + '/cars/' + id)
                    .map(res => <Car> res.json())
                    .catch(this.handleError)
                    .toPromise();
  }
  addCar(newCar: Car) {
     let body = JSON.stringify(newCar);
     let headers = new Headers({'Content-Type': 'application/json'});
     let options = new RequestOptions({headers: headers});
     
     return this.http.post(this._backendUrl + '/cars', body, options)
                    .catch(this.handleError)
                    .subscribe(res => {
                      console.log(res.json())
                    });
  }
  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}