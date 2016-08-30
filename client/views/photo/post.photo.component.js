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
var photo_service_1 = require("/client/service/photo.service/photo.service");
var PostPhotoComponent = (function () {
    function PostPhotoComponent(PhotoService) {
        this.PhotoService = PhotoService;
    }
    ;
    PostPhotoComponent.prototype.post = function () {
        var element = document.getElementsByTagName('input')[0].files[0];
        var reader = new FileReader();
        var box = document.getElementsByTagName('a')[0];
        var that = this;
        var img_info = document.getElementById('img_info').value;
        reader.onload = function (event) {
            this.imgUrl = event.target.result;
            box.innerHTML = '<img class="col-xs-12" src = ' + this.imgUrl + '>';
            console.log(this.imgUrl);
            that.PhotoService.postPhoto({ img_info: img_info, img_data: this.imgUrl }).then();
        };
        reader.readAsDataURL(element);
    };
    PostPhotoComponent.prototype.getPhoto = function () {
        var _this = this;
        this.PhotoService.getPhoto().then(function (photo) { return _this.photo = photo; });
    };
    PostPhotoComponent.prototype.goBack = function () {
        window.history.back();
    };
    PostPhotoComponent.prototype.ngOnInit = function () {
        this.getPhoto();
    };
    PostPhotoComponent = __decorate([
        core_1.Component({
            selector: 'post-photo',
            templateUrl: '/client/views/photo/post.photo.html',
            styleUrls: ['./client/views/photo/post.photo.css'],
            providers: [photo_service_1.PhotoService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof photo_service_1.PhotoService !== 'undefined' && photo_service_1.PhotoService) === 'function' && _a) || Object])
    ], PostPhotoComponent);
    return PostPhotoComponent;
    var _a;
}());
exports.PostPhotoComponent = PostPhotoComponent;
;
//# sourceMappingURL=post.photo.component.js.map