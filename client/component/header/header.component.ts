import { Component } from '@angular/core';

@Component({
    selector:'header',
    templateUrl:'/client/component/header/header.html',
    styleUrls:  ['./client/component/header/header.css'],
    directives: []
})

export class HeaderComponent{
    goBack(){
        window.history.back();
    }
}