import { Component,OnInit } from "@angular/core";
import { FooterComponent } from "/client/component/footer/footer.component";
import { PhotoService } from "/client/service/photo.service/photo.service";
import { Router } from '@angular/router';

@Component({
    selector:'photo',
    templateUrl:'/client/views/photo/photo.html',
    styleUrls:['./client/views/photo/photo.css'],
    directives:[ FooterComponent ],
    providers: [PhotoService]
})

export class PhotoComponent implements OnInit {
    constructor(private PhotoService:PhotoService,private router:Router){ };
    getPhoto(){
        this.PhotoService.getPhoto().then(photo => this.photo = photo);
    }
    gotoDetail() {
        let id = event.target.id;
        let link = ['/photo/detail', id];
        this.router.navigate(link);
    }
    ngOnInit(){
        this.getPhoto();
    }
};