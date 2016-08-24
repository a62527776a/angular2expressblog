import { Component,OnInit } from "@angular/core";
import { ArticleService } from '/client/service/article.service/article.service';
import { ArticleModel } from '/client/data/article.models'
import { ActivatedRoute, Params } from '@angular/router';

import { HeaderComponent } from '/client/component/header/header.component';

@Component({
    selector:'delete',
    templateUrl:'/client/views/article/delete.html',
    styleUrls:['./client/views/article/delete.css'],
    directives:[HeaderComponent],
    providers: [ArticleService]
})

export class DeleteComponent implements OnInit {
    article: ArticleModel[];
    constructor(private ArticleService:ArticleService){
    }
    delete(ArticleModel:ArticleModel):void{
        this.ArticleService
            .delete(ArticleModel)
            .then()
    }
    getArticle(){
        this.ArticleService.getArticle().then(article => this.article = article);
    }
    ngOnInit(){
        this.getArticle();
    }
};