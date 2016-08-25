import { Injectable } from '@angular/core';
import { CommentModel } from '../../data/comment.module';
import { Headers,Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CommentService {
    private commentUrl = '/api/comment';
    private handleError(error:any){
        console.error('an error occurred',error);
        return Promise.reject(error.message || error);
    }
    constructor(private http:Http) { }
    getComment(){
        return this.http.get(this.commentUrl)
            .toPromise()
            //类型未知
            .then(response => response.json() as CommentModel[])
            .catch(this.handleError);
    }
    postComment(CommentModel: CommentModel): Promise<CommentModel> {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.commentUrl, JSON.stringify(CommentModel), {headers: headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }
    delete(CommentModel: CommentModel): Promise<Response> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.commentUrl}/${CommentModel._id}`;
        console.log(this.commentUrl);
        return this.http
            .delete(url, {headers: headers})
            .toPromise()
            .catch(this.handleError);
    }
}