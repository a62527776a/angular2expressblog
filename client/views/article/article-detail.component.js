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
var article_module_1 = require('/client/data/article.module');
var router_1 = require('@angular/router');
var header_component_1 = require('/client/component/header/header.component');
var ArticleDetailComponent = (function () {
    function ArticleDetailComponent(ArticleService, article, route) {
        this.ArticleService = ArticleService;
        this.article = article;
        this.route = route;
    }
    ArticleDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params;
            _this.ArticleService.getArticleById(id)
                .then(function (article) { return _this.article = article; });
        });
    };
    ArticleDetailComponent = __decorate([
        core_1.Component({
            selector: 'artcle',
            templateUrl: '/client/views/article/article-detail.html',
            styleUrls: ['./client/views/article/article-detail.css'],
            directives: [header_component_1.HeaderComponent],
            providers: [article_service_1.ArticleService, article_module_1.ArticleModel]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof article_service_1.ArticleService !== 'undefined' && article_service_1.ArticleService) === 'function' && _a) || Object, (typeof (_b = typeof article_module_1.ArticleModel !== 'undefined' && article_module_1.ArticleModel) === 'function' && _b) || Object, router_1.ActivatedRoute])
    ], ArticleDetailComponent);
    return ArticleDetailComponent;
    var _a, _b;
}());
exports.ArticleDetailComponent = ArticleDetailComponent;
;
//# sourceMappingURL=article-detail.component.js.map