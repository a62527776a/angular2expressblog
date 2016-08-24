"use strict";
var router_1 = require('@angular/router');
var index_component_1 = require('../../client/views/index/index.component');
var article_component_1 = require('../../client/views/article/article.component');
var user_component_1 = require('../../client/views/user/user.component');
var article_detail_component_1 = require('../../client/views/article/article-detail.component');
var login_component_1 = require("../views/user/login.component");
var post_component_1 = require('../views/article/post.component');
var delete_component_1 = require('../views/article/delete.component');
var routes = [
    {
        path: '',
        component: index_component_1.IndexComponent
    },
    {
        path: 'word-write',
        component: article_component_1.ArticleComponent
    },
    {
        path: 'user',
        component: user_component_1.UserComponent
    },
    {
        path: 'article/detail/:id',
        component: article_detail_component_1.ArticleDetailComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'post',
        component: post_component_1.PostComponent
    },
    {
        path: 'delete',
        component: delete_component_1.DeleteComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map