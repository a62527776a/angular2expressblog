import { Component } from "@angular/core";
import { FooterComponent } from "/client/component/footer/footer.component";
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector:'user',
    templateUrl:'/client/views/user/user.html',
    styleUrls:['./client/views/user/user.css'],
    directives:[FooterComponent,ROUTER_DIRECTIVES]

})

export class UserComponent {};