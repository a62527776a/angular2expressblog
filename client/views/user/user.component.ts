import { Component,OnInit } from "@angular/core";
import { FooterComponent } from "/client/component/footer/footer.component";
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LoginService } from '/client/service/user.service/login.service';

@Component({
    selector:'user',
    templateUrl:'/client/views/user/user.html',
    styleUrls:['./client/views/user/user.css'],
    directives:[FooterComponent,ROUTER_DIRECTIVES],
    providers:[LoginService]
})

export class UserComponent implements OnInit {
    constructor(private LoginService:LoginService){ };
    ifLogin(){
        this.LoginService.ifLogin().then(login => this.login = login)
    }
    ngOnInit(){
        this.ifLogin();
    }
};