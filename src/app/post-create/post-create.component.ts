import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  product:string = "Mobile";
  name:string = "Nandini";
  imageUrl:string = "assets/images/apple-iphone.png";
  msg:string ="";
  onAddCart(){
    this.msg = "Product addded in cart"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
