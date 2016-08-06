import { provideRouter,RouterConfig } from '@angular/router';

import { IndexComponent } from '../views/index/index.component';
import { ArticleComponent } from '../views/article/article.component';
import { UserComponent } from '../views/user/user.component';

const routes: RouterConfig = [
    {
        path:'',
        component:IndexComponent
    },
    {
        path:'article',
        component:ArticleComponent
    },
    {
        path:'user',
        component:UserComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];