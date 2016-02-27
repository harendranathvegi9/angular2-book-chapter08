System.register(['angular2/platform/browser', 'angular2/router', 'angular2/http', 'angular2/core', './app.component', 'rxjs/Rx', './car.service'], function(exports_1) {
    var browser_1, router_1, http_1, core_1, app_component_1, car_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (_1) {},
            function (car_service_1_1) {
                car_service_1 = car_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                core_1.provide(car_service_1.CarService, { useClass: car_service_1.CarService })
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map