"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var CarService = (function () {
    function CarService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this._backendUrl = 'http://localhost:8080/api';
    }
    CarService.prototype.getCars = function () {
        return this.http.get(this._backendUrl + '/cars')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CarService.prototype.getCar = function (id) {
        return this.http.get(this._backendUrl + '/cars/' + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CarService.prototype.addCar = function (newCar) {
        return this.http
            .post(this._backendUrl + '/cars', JSON.stringify(newCar), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    CarService.prototype.handleError = function (error) {
        console.error(error);
        return Promise.reject(error.message || error);
    };
    CarService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CarService);
    return CarService;
}());
exports.CarService = CarService;
//# sourceMappingURL=car.service.js.map