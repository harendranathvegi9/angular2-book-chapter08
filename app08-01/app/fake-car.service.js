System.register(['angular2/core', './car', 'underscore'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, car_1, _;
    var FakeCarService, CARS, carsPromise;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (car_1_1) {
                car_1 = car_1_1;
            },
            function (_1) {
                _ = _1;
            }],
        execute: function() {
            FakeCarService = (function () {
                function FakeCarService() {
                }
                FakeCarService.prototype.getCars = function () {
                    return carsPromise;
                };
                FakeCarService.prototype.getCar = function (id) {
                    return carsPromise.then(function (cars) { return cars.filter(function (car) { return car.id == id; })[0]; });
                };
                FakeCarService.prototype.addCar = function (newCar) {
                    CARS.push(newCar);
                };
                FakeCarService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], FakeCarService);
                return FakeCarService;
            })();
            exports_1("FakeCarService", FakeCarService);
            CARS = [
                new car_1.Car(_.uniqueId('car_'), 'Fake BMW', 'X5', 'Diesel', 'Suvs', 250, 250),
                new car_1.Car(_.uniqueId('car_'), 'Fake BMW', 'X1', 'Diesel', 'Suvs', 200, 150)
            ];
            carsPromise = Promise.resolve(CARS);
        }
    }
});
//# sourceMappingURL=fake-car.service.js.map