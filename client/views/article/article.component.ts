import { Component } from "@angular/core";
import { FooterComponent } from "/client/component/footer/footer.component";


@Component({
    selector:'artcle',
    templateUrl:'/client/views/article/article.html',
    styleUrls:['./client/views/article/article.css'],
    directives:[FooterComponent]
})

export class ArticleComponent {};