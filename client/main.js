"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
var mockUserdata_service_1 = require('./mock-data/mockUserdata.service');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./routes/app.routes');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.appRouterProviders,
    http_1.HTTP_PROVIDERS,
    { provide: http_2.XHRBackend, useClass: mockUserdata_service_1.mockUserData },
    { provide: angular2_in_memory_web_api_1.SEED_DATA, useClass: mockUserdata_service_1.mockUserData }
]);
//# sourceMappingURL=main.js.map