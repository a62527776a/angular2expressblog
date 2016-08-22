import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector:'footer',
    templateUrl:'/client/component/footer/footer.html',
    styleUrls:  ['./client/component/footer/footer.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class FooterComponent{ }