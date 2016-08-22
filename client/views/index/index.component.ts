import { Component,OnInit } from "@angular/core";
import { FooterComponent } from "/client/component/footer/footer.component";
import { ArticleService } from "/client/service/article.service/article.service";
import { Router } from '@angular/router';

@Component({
    selector:'index',
    templateUrl:'/client/views/index/index.html',
    styleUrls:['./client/views/index/index.css'],
    directives:[ FooterComponent ],
    providers: [ArticleService]
})

export class IndexComponent implements OnInit {
    constructor(private articleService:ArticleService,private router:Router){ };
    getArticle(){
        this.articleService.getArticle().then(article => this.article = article);
    }
    gotoDetail() {
        let id = event.target.id;
        let link = ['/article/detail', id];
        this.router.navigate(link);
    }
    ngOnInit(){
        this.getArticle();
    }
};