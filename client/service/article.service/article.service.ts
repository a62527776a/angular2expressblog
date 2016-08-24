import { Injectable } from '@angular/core';
import { ArticleModel } from '../../data/article.models';
import { Headers,Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class ArticleService {
	private articleUrl = '/article/article_list';
	private articleDetailUrl = '/article/article_detail';
	private postArticleUrl = '/article/post';
	private handleError(error:any){
		console.error('an error occurred',error);
		return Promise.reject(error.message || error);
	}
	constructor(private http:Http) { }
	getArticle(){
		return this.http.get(this.articleUrl)
			.toPromise()
			//类型未知
			.then(response => response.json())
			.catch(this.handleError);
	}
	getArticleById(id:any){
		let _id = id.id;
		console.log("_id" + _id);
		return this.http.get(this.articleDetailUrl + '/' + _id)
			.toPromise()
			.then(response => response.json() as ArticleModel[])
			.catch(this.handleError);
	}
	private post(ArticleModel: ArticleModel): Promise<ArticleModel> {
		let headers = new Headers({
			'Content-Type': 'application/json'});

		return this.http
			.post(this.postArticleUrl, JSON.stringify(ArticleModel), {headers: headers})
			.toPromise()
			.then(res => res.json())
			.catch(this.handleError);
	}
	delete(ArticleModel: ArticleModel): Promise<Response> {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		let url = `${this.postArticleUrl}/${ArticleModel._id}`;
		return this.http
			.delete(url, {headers: headers})
			.toPromise()
			.catch(this.handleError);
	}
}