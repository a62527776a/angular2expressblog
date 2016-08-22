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
var PostComponent = (function () {
    function PostComponent(ArticleService) {
        this.ArticleService = ArticleService;
    }
    PostComponent.prototype.post = function () {
        var _this = this;
        var article_title = document.getElementById('article_title');
        var article_content = document.getElementById('article_content');
        var article = { article_title: article_title.value, article_content: article_content.value };
        this.ArticleService.post(article).then(function (article) { return _this.article = article; });
    };
    PostComponent = __decorate([
        core_1.Component({
            selector: 'post',
            templateUrl: '/client/views/article/post.html',
            styleUrls: ['./client/views/article/post.css'],
            directives: [header_component_1.HeaderComponent],
            providers: [article_service_1.ArticleService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof article_service_1.ArticleService !== 'undefined' && article_service_1.ArticleService) === 'function' && _a) || Object])
    ], PostComponent);
    return PostComponent;
    var _a;
}());
exports.PostComponent = PostComponent;
;
//# sourceMappingURL=post.component.js.map