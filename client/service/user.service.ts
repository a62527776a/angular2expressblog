// import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/toPromise';
//
// @Injectable()
// export class userService {
//     private userUrl = 'app/user';
//     constructor(private http:Http) { };
//     getUser(){
//         return this.http.get(this.userUrl)
//             .toPromise()
//             .then(response => response.json().data as user)
//             .catch(this.handleError);
//     }
//     private handleError(error: any) {
//         console.error('An error occurred', error);
//         return Promise.reject(error.message || error);
//     }
//     private post()
// }