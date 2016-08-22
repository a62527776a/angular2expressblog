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
var article_service_1 = require("/client/service/article.service/article.service");
var router_1 = require('@angular/router');
var IndexComponent = (function () {
    function IndexComponent(articleService, router) {
        this.articleService = articleService;
        this.router = router;
    }
    ;
    IndexComponent.prototype.getArticle = function () {
        var _this = this;
        this.articleService.getArticle().then(function (article) { return _this.article = article; });
    };
    IndexComponent.prototype.gotoDetail = function () {
        var id = event.target.id;
        var link = ['/article/detail', id];
        this.router.navigate(link);
    };
    IndexComponent.prototype.ngOnInit = function () {
        this.getArticle();
    };
    IndexComponent = __decorate([
        core_1.Component({
            selector: 'index',
            templateUrl: '/client/views/index/index.html',
            styleUrls: ['./client/views/index/index.css'],
            directives: [footer_component_1.FooterComponent],
            providers: [article_service_1.ArticleService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof article_service_1.ArticleService !== 'undefined' && article_service_1.ArticleService) === 'function' && _a) || Object, router_1.Router])
    ], IndexComponent);
    return IndexComponent;
    var _a;
}());
exports.IndexComponent = IndexComponent;
;
//# sourceMappingURL=index.component.js.map