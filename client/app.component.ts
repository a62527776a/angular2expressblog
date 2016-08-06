import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ArticleService } from './service/article.service'

@Component({
    directives: [ROUTER_DIRECTIVES],
    providers: [ArticleService],
    selector:'app',
    templateUrl:'/client/component/footer/footer.html'
})

export class AppComponent implements OnInit {
    constructor(private articleService: ArticleService){ };
    OnInit() {

    }
    ngOnInit() {
        this.getArticle();
    }
    getArticle(){
        this.articleService.getArticle().then(article => this.article = article);
    }
}