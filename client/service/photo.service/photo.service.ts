import { Injectable } from '@angular/core';
import { PhotoModule } from '../../data/photo.models';
import { Headers,Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class PhotoService {
    private photoUrl = '/api/photo'
    private getPhotoByIdUrl = '/api/getPhotoById';
    private handleError(error:any){
        console.error('an error occurred',error);
        return Promise.reject(error.message || error);
    }
    constructor(private http:Http) { }
    postPhoto(PhotoModule: PhotoModule): Promise<PhotoModule> {
        let headers = new Headers({
            'Content-Type': 'application/json'});
        return this.http.post(this.photoUrl, JSON.stringify(PhotoModule), {headers: headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }
    getPhoto(){
        return this.http.get(this.photoUrl)
            .toPromise()
            //类型未知
            .then(response => response.json())
            .catch(this.handleError);
    }
    getPhotoById(id:any){
        let _id = id.id;
        return this.http.get(this.getPhotoByIdUrl + '/' + _id)
            .toPromise()
            .then(response => response.json() as ArticleModel[])
            .catch(this.handleError);
    }
    delete(PhotoModule: PhotoModule): Promise<Response> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.PhotoModule}/${PhotoModule._id}`;
        return this.http
            .delete(url, {headers: headers})
            .toPromise()
            .catch(this.handleError);
    }
}