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
var ArticleService = (function () {
    function ArticleService(http) {
        this.http = http;
        this.articleUrl = '/article/article_list';
        this.articleDetailUrl = '/article/article_detail';
        this.postArticleUrl = '/article/post';
    }
    ArticleService.prototype.handleError = function (error) {
        console.error('an error occurred', error);
        return Promise.reject(error.message || error);
    };
    ArticleService.prototype.getArticle = function () {
        return this.http.get(this.articleUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ArticleService.prototype.getArticleById = function (id) {
        var _id = id.id;
        console.log("_id" + _id);
        return this.http.get(this.articleDetailUrl + '/' + _id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ArticleService.prototype.post = function (ArticleModel) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.postArticleUrl, JSON.stringify(ArticleModel), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ArticleService.prototype.delete = function (ArticleModel) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.postArticleUrl + "/" + ArticleModel._id;
        return this.http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    };
    ArticleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ArticleService);
    return ArticleService;
}());
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.service.js.map