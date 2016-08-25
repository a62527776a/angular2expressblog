import { Component,OnInit } from "@angular/core";
import { CommentService } from '/client/service/comment.service/comment.service';
import { CommentModel } from '/client/data/article.models'
import { ActivatedRoute, Params } from '@angular/router';

import { HeaderComponent } from '/client/component/header/header.component';

@Component({
    selector:'delete',
    templateUrl:'/client/views/article/deleteComment.html',
    styleUrls:['./client/views/article/deleteComment.css'],
    directives:[HeaderComponent],
    providers: [CommentService]
})

export class DeleteCommentComponent implements OnInit {
    comment: CommentModel[];
    constructor(private CommentService:CommentService){
    }
    delete(CommentModel:CommentModel):void{
        this.CommentService
            .delete(CommentModel)
            .then()
    }
    getComment(){
        this.CommentService.getComment().then(comment => this.comment = comment);
    }
    ngOnInit(){
        this.getComment();
    }
};