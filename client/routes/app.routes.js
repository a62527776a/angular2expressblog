"use strict";
var router_1 = require('@angular/router');
var index_component_1 = require('../views/index/index.component');
var article_component_1 = require('../views/article/article.component');
var user_component_1 = require('../views/user/user.component');
var routes = [
    {
        path: '',
        component: index_component_1.IndexComponent
    },
    {
        path: 'article',
        component: article_component_1.ArticleComponent
    },
    {
        path: 'user',
        component: user_component_1.UserComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map