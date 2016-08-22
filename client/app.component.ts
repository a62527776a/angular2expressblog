import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

// import { ArticleService } from './service/article.service'

@Component({
    directives: [ROUTER_DIRECTIVES],
    // providers: [ArticleService],
    selector:'app',
    template:'<router-outlet></router-outlet>'
})

export class AppComponent {}