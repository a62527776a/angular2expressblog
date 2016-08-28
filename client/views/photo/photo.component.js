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
var photo_service_1 = require("/client/service/photo.service/photo.service");
var router_1 = require('@angular/router');
var PhotoComponent = (function () {
    function PhotoComponent(PhotoService, router) {
        this.PhotoService = PhotoService;
        this.router = router;
    }
    ;
    PhotoComponent.prototype.getPhoto = function () {
        var _this = this;
        this.PhotoService.getPhoto().then(function (photo) { return _this.photo = photo; });
    };
    PhotoComponent.prototype.gotoDetail = function () {
        var id = event.target.id;
        var link = ['/photo/detail', id];
        this.router.navigate(link);
    };
    PhotoComponent.prototype.ngOnInit = function () {
        this.getPhoto();
    };
    PhotoComponent = __decorate([
        core_1.Component({
            selector: 'photo',
            templateUrl: '/client/views/photo/photo.html',
            styleUrls: ['./client/views/photo/photo.css'],
            directives: [footer_component_1.FooterComponent],
            providers: [photo_service_1.PhotoService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof photo_service_1.PhotoService !== 'undefined' && photo_service_1.PhotoService) === 'function' && _a) || Object, router_1.Router])
    ], PhotoComponent);
    return PhotoComponent;
    var _a;
}());
exports.PhotoComponent = PhotoComponent;
;
//# sourceMappingURL=photo.component.js.map