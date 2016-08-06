import { Injectable } from '@angular/core';
import { ARTICLE } from '../mock-data/mock-article';

@Injectable()
export class ArticleService {
    getArticle(){
        return Promise.resolve(ARTICLE);
    }
}