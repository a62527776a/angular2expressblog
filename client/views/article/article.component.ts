import { Component,OnInit } from "@angular/core";
import { FooterComponent } from "/client/component/footer/footer.component";
import { CommentService } from '/client/service/comment.service/comment.service';
import { CommentModel } from '/client/data/comment.module';

@Component({
    selector:'artcle',
    templateUrl:'/client/views/article/article.html',
    styleUrls:['./client/views/article/article.css'],
    directives:[FooterComponent],
    providers: [CommentService,CommentModel]

})


export class ArticleComponent implements OnInit{
    constructor(private CommentService:CommentService,private CommentModel:CommentModel){ }

    getComment(){
        this.CommentService.getComment().then(comment => this.comment = comment)
    }

    postComment(){
        let comment_name = document.getElementById('comment_name').value;
        let comment_content = document.getElementById('comment_content').value;
        let comment = {comment_name:comment_name,comment_content:comment_content}
        this.CommentService.postComment(comment).then(res => res.json())
    }

    ngOnInit(){
        this.getComment();
    }
};