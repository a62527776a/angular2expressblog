import { Injectable } from '@angular/core';
import { Headers,Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { LoginModule } from '/client/data/login.module'

@Injectable()
export class LoginService {
    private loginUrl = 'api/login';
    private ifLoginUrl = 'api/ifLogin';
    constructor(private http:Http){
    }
    private handleError(error:any){
        console.error('an error occurred',error);
        return Promise.reject(error.message || error);
    }
    private login(user:LoginModule): Promise<LoginModule>{
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http.post(this.loginUrl, JSON.stringify(user), { headers:headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }
    ifLogin(){
        return this.http.get(this.ifLoginUrl)
            .toPromise()
            .then(response => response.json())
    }
}