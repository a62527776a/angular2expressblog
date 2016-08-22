import { provideRouter,RouterConfig } from '@angular/router';

import { IndexComponent } from '../../client/views/index/index.component';
import { ArticleComponent } from '../../client/views/article/article.component';
import { UserComponent } from '../../client/views/user/user.component';
import { ArticleDetailComponent } from '../../client/views/article/article-detail.component'
import { LoginComponent } from "../views/user/login.component";
import { PostComponent } from '../views/article/post.component';

const routes: RouterConfig = [
    {
        path:'',
        component:IndexComponent
    },
    {
        path:'word-write',
        component:ArticleComponent
    },
    {
        path:'user',
        component:UserComponent
    },
    {
        path:'article/detail/:id',
        component:ArticleDetailComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'post',
        component:PostComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];