import { Component } from "@angular/core";
import { LoginService } from '/client/service/user.service/login.service';
import { LoginModule } from '/client/data/login.module';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector:'login',
    templateUrl:'/client/views/user/login.html',
    styleUrls:['./client/views/user/login.css'],
    directives:[ROUTER_DIRECTIVES],
    providers:[LoginService]
})


export class LoginComponent {
    username:string;
    password:string;
    login_status:string[];
    constructor(private LoginService:LoginService) {
    }
    login(user){
        this.username = document.getElementById('username');
        this.password = document.getElementById('password');
        this.user = {username:this.username.value,password:this.password.value};
        user = {username:this.username.value,password:this.password.value};
        this.LoginService.login(user).then(login_status => this.login_status = login_status);
    }
    goBack(){
        window.history.back();
    }
    logout(){
        this.LoginService.logout().then(login_status => this.login_status = login_status);
    }
};