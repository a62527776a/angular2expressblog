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
var footer_component_1 = require("/client/component/footer/footer.component");
var router_1 = require('@angular/router');
var login_service_1 = require('/client/service/user.service/login.service');
var UserComponent = (function () {
    function UserComponent(LoginService) {
        this.LoginService = LoginService;
    }
    ;
    UserComponent.prototype.ifLogin = function () {
        var _this = this;
        this.LoginService.ifLogin().then(function (login) { return _this.login = login; });
    };
    UserComponent.prototype.logout = function () {
        var _this = this;
        this.LoginService.Logout().then(function (login) { return _this.login = login; });
    };
    UserComponent.prototype.ngOnInit = function () {
        this.ifLogin();
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user',
            templateUrl: '/client/views/user/user.html',
            styleUrls: ['./client/views/user/user.css'],
            directives: [footer_component_1.FooterComponent, router_1.ROUTER_DIRECTIVES],
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof login_service_1.LoginService !== 'undefined' && login_service_1.LoginService) === 'function' && _a) || Object])
    ], UserComponent);
    return UserComponent;
    var _a;
}());
exports.UserComponent = UserComponent;
;
//# sourceMappingURL=user.component.js.map