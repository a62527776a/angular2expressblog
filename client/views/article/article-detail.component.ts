import { Component,OnInit } from "@angular/core";
import { ArticleService } from '/client/service/article.service/article.service';
import { ArticleModel } from '/client/data/article.module'
import { ActivatedRoute, Params } from '@angular/router';

import { HeaderComponent } from '/client/component/header/header.component';

@Component({
    selector:'artcle',
    templateUrl:'/client/views/article/article-detail.html',
    styleUrls:['./client/views/article/article-detail.css'],
    directives:[HeaderComponent],
    providers: [ArticleService,ArticleModel]
})

export class ArticleDetailComponent implements OnInit {
    constructor(private ArticleService:ArticleService,private article:ArticleModel,private route: ActivatedRoute){
    }

    ngOnInit(){
        this.route.params.forEach((params: Params) => {
            let id = params;
            this.ArticleService.getArticleById(id)
                .then(article => this.article = article)
        });
    }
    // goBack(){
    //     window.history.back();
    // }

};