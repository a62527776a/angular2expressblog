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
var PhotoService = (function () {
    function PhotoService(http) {
        this.http = http;
        this.photoUrl = '/api/photo';
        this.getPhotoByIdUrl = '/api/getPhotoById';
    }
    PhotoService.prototype.handleError = function (error) {
        console.error('an error occurred', error);
        return Promise.reject(error.message || error);
    };
    PhotoService.prototype.postPhoto = function (PhotoModule) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http.post(this.photoUrl, JSON.stringify(PhotoModule), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PhotoService.prototype.getPhoto = function () {
        return this.http.get(this.photoUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PhotoService.prototype.getPhotoById = function (id) {
        var _id = id.id;
        return this.http.get(this.getPhotoByIdUrl + '/' + _id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PhotoService.prototype.delete = function (PhotoModule) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.PhotoModule + "/" + PhotoModule._id;
        return this.http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    };
    PhotoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PhotoService);
    return PhotoService;
}());
exports.PhotoService = PhotoService;
//# sourceMappingURL=photo.service.js.map