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
var article_service_1 = require('/client/service/article.service/article.service');
var header_component_1 = require('/client/component/header/header.component');
var DeleteComponent = (function () {
    function DeleteComponent(ArticleService) {
        this.ArticleService = ArticleService;
    }
    DeleteComponent.prototype.delete = function (ArticleModel) {
        this.ArticleService
            .delete(ArticleModel)
            .then();
    };
    DeleteComponent.prototype.getArticle = function () {
        var _this = this;
        this.ArticleService.getArticle().then(function (article) { return _this.article = article; });
    };
    DeleteComponent.prototype.ngOnInit = function () {
        this.getArticle();
    };
    DeleteComponent = __decorate([
        core_1.Component({
            selector: 'delete',
            templateUrl: '/client/views/article/delete.html',
            styleUrls: ['./client/views/article/delete.css'],
            directives: [header_component_1.HeaderComponent],
            providers: [article_service_1.ArticleService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof article_service_1.ArticleService !== 'undefined' && article_service_1.ArticleService) === 'function' && _a) || Object])
    ], DeleteComponent);
    return DeleteComponent;
    var _a;
}());
exports.DeleteComponent = DeleteComponent;
;
//# sourceMappingURL=delete.component.js.map