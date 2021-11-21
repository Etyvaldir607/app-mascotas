import { Component, OnInit } from '@angular/core';

import { FelinosService } from '../../services/felinos.service';

import { Image } from '../../model/image'; 


@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})


export class GaleryComponent implements OnInit {

  title_felin = '18 felinos';
  notFound = false;
  image: Image = {};
  images: Image[];
  inicio: number = 0;


  data = {
    'limit': 18,
    'mime_types': '',
    'order':'Random',
    'size':'small',
    'page':0,
    'category_ids':1,
    'sub_id':'demo-b7e1c3'
  }



  constructor( private imageservice:FelinosService ) { }

  ngOnInit() {

    console.log(this.data);
    this.imageservice.getImageGalery(this.data).subscribe((imgfrontheApi: Image[]) =>{
      this.images = imgfrontheApi;
      console.log(this.images);
      this.image = this.images[0];
    }, error => console.error(error));
  }



  newLoad(){
    this.imageservice.getImageGalery(this.data).subscribe((imgfrontheApi: Image[]) =>{
      this.images = imgfrontheApi;
      console.log(this.images);
      this.image = this.images[0];

    }, error => console.error(error));

  }

  first(){
    this.inicio = 0;
    this.image = this.images[this.inicio];
    console.log(this.image);
  }

  last(){
    this.inicio = 17;
    this.image = this.images[this.inicio]; 
  }

  next(){
    if(this.inicio < 17){
      this.inicio = this.inicio + 1;
      this.image = this.images[this.inicio]; 
    }else{
      this.image = this.images[this.inicio];
    }

  }

  prev(){
    if( this.inicio > 0){
      this.inicio = this.inicio - 1;
      this.image = this.images[this.inicio];
    }else{
      this.image = this.images[this.inicio];
    }
  }

}
