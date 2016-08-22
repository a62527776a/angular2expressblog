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
var core_1 = require("@angular/core");
var login_service_1 = require('/client/service/user.service/login.service');
var router_1 = require('@angular/router');
var LoginComponent = (function () {
    function LoginComponent(LoginService) {
        this.LoginService = LoginService;
    }
    LoginComponent.prototype.login = function (user) {
        var _this = this;
        this.username = document.getElementById('username');
        this.password = document.getElementById('password');
        this.user = { username: this.username.value, password: this.password.value };
        user = { username: this.username.value, password: this.password.value };
        this.LoginService.login(user).then(function (login_status) { return _this.login_status = login_status; });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: '/client/views/user/login.html',
            styleUrls: ['./client/views/user/login.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof login_service_1.LoginService !== 'undefined' && login_service_1.LoginService) === 'function' && _a) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a;
}());
exports.LoginComponent = LoginComponent;
;
//# sourceMappingURL=login.component.js.map