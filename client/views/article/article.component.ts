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
        let comment = {comment_name:comment_name,comment_content:comment_content};
        let message_box = document.getElementById('message_box');
        let mark = document.createElement('div');
        mark.className = 'color-white background-white';
        mark.style = 'height: 80px;width: 100%;margin: 10px 0 !important;padding: 5px 15px !important;';
        this.CommentService.postComment(comment).then((res) => {
             if(res[0].status == 200) {
                message_box.appendChild(mark);
                 mark.innerHTML = '<h5 class="" style="color:#337ab7">'+comment_name+':</h5><p style="color:#337ab7">'+comment_content+'</p><small class="pull-right" style="color:#337ab7">'+res[0].createTime+'</small>'
             }
        })
    };
    ngOnInit(){
        this.getComment();
    }
};