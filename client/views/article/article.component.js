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
var comment_service_1 = require('/client/service/comment.service/comment.service');
var comment_module_1 = require('/client/data/comment.module');
var ArticleComponent = (function () {
    function ArticleComponent(CommentService, CommentModel) {
        this.CommentService = CommentService;
        this.CommentModel = CommentModel;
    }
    ArticleComponent.prototype.getComment = function () {
        var _this = this;
        this.CommentService.getComment().then(function (comment) { return _this.comment = comment; });
    };
    ArticleComponent.prototype.postComment = function () {
        var comment_name = document.getElementById('comment_name').value;
        var comment_content = document.getElementById('comment_content').value;
        var comment = { comment_name: comment_name, comment_content: comment_content };
        var message_box = document.getElementById('message_box');
        var mark = document.createElement('div');
        mark.className = 'color-white background-white';
        mark.style = 'height: 80px;width: 100%;margin: 10px 0 !important;padding: 5px 15px !important;';
        this.CommentService.postComment(comment).then(function (res) {
            if (res[0].status == 200) {
                message_box.appendChild(mark);
                mark.innerHTML = '<h5 class="" style="color:#337ab7">' + comment_name + ':</h5><p style="color:#337ab7">' + comment_content + '</p><small class="pull-right" style="color:#337ab7">' + res[0].createTime + '</small>';
            }
        });
    };
    ;
    ArticleComponent.prototype.ngOnInit = function () {
        this.getComment();
    };
    ArticleComponent = __decorate([
        core_1.Component({
            selector: 'artcle',
            templateUrl: '/client/views/article/article.html',
            styleUrls: ['./client/views/article/article.css'],
            directives: [footer_component_1.FooterComponent],
            providers: [comment_service_1.CommentService, comment_module_1.CommentModel]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof comment_service_1.CommentService !== 'undefined' && comment_service_1.CommentService) === 'function' && _a) || Object, (typeof (_b = typeof comment_module_1.CommentModel !== 'undefined' && comment_module_1.CommentModel) === 'function' && _b) || Object])
    ], ArticleComponent);
    return ArticleComponent;
    var _a, _b;
}());
exports.ArticleComponent = ArticleComponent;
;
//# sourceMappingURL=article.component.js.map