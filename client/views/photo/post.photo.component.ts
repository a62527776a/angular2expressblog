import { Component,OnInit } from "@angular/core";
import { PhotoService } from "/client/service/photo.service/photo.service";

@Component({
    selector:'post-photo',
    templateUrl:'/client/views/photo/post.photo.html',
    styleUrls:['./client/views/photo/post.photo.css'],
    providers: [PhotoService]
})

export class PostPhotoComponent implements OnInit {
    imgUrl:string;
    constructor(private PhotoService:PhotoService){ };
    post(){
        let element = document.getElementsByTagName('input')[0].files[0];
        let reader = new FileReader();
        let box = document.getElementsByTagName('a')[0];
        let that = this;
        let img_info = document.getElementById('img_info').value;
        reader.onload = function(event){
            this.imgUrl = event.target.result;
            box.innerHTML='<img class="col-xs-12" src = '+this.imgUrl+'>';
            console.log(this.imgUrl);
            that.PhotoService.postPhoto({img_info:img_info,img_data:this.imgUrl}).then();
        }
        reader.readAsDataURL(element);
    }
    getPhoto(){
        this.PhotoService.getPhoto().then(photo => this.photo = photo);
    }
    goBack(){
        window.history.back();
    }
    ngOnInit(){
        this.getPhoto();
    }
};