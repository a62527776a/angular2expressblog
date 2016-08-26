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
var comment_service_1 = require('/client/service/comment.service/comment.service');
var header_component_1 = require('/client/component/header/header.component');
var DeleteCommentComponent = (function () {
    function DeleteCommentComponent(CommentService) {
        this.CommentService = CommentService;
    }
    DeleteCommentComponent.prototype.delete = function (CommentModel) {
        this.CommentService
            .delete(CommentModel)
            .then();
    };
    DeleteCommentComponent.prototype.getComment = function () {
        var _this = this;
        this.CommentService.getComment().then(function (comment) { return _this.comment = comment; });
    };
    DeleteCommentComponent.prototype.ngOnInit = function () {
        this.getComment();
    };
    DeleteCommentComponent.prototype.goBack = function () {
        window.history.back();
    };
    DeleteCommentComponent = __decorate([
        core_1.Component({
            selector: 'delete',
            templateUrl: '/client/views/article/deleteComment.html',
            styleUrls: ['./client/views/article/deleteComment.css'],
            directives: [header_component_1.HeaderComponent],
            providers: [comment_service_1.CommentService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof comment_service_1.CommentService !== 'undefined' && comment_service_1.CommentService) === 'function' && _a) || Object])
    ], DeleteCommentComponent);
    return DeleteCommentComponent;
    var _a;
}());
exports.DeleteCommentComponent = DeleteCommentComponent;
;
//# sourceMappingURL=deleteComment.component.js.map