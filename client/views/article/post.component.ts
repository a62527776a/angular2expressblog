import { Component,OnInit } from "@angular/core";
import { ArticleService } from '/client/service/article.service/article.service';
import { ArticleModel } from '/client/data/article.models'
import { ActivatedRoute, Params } from '@angular/router';

import { HeaderComponent } from '/client/component/header/header.component';

@Component({
    selector:'post',
    templateUrl:'/client/views/article/post.html',
    styleUrls:['./client/views/article/post.css'],
    directives:[HeaderComponent],
    providers: [ArticleService]
})

export class PostComponent {
    article: ArticleModel[];
    constructor(private ArticleService:ArticleService){
    }
    post(){
        let article_title = document.getElementById('article_title');
        let article_content = document.getElementById('article_content');
        let article = {article_title:article_title.value,article_content:article_content.value}
        this.ArticleService.post(article).then(article => this.article = article);
    }
};