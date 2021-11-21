import { Component, OnInit } from '@angular/core';
import { FelinosService } from '../../services/felinos.service';
import { Felino } from '../../model/felino';

@Component({
  selector: 'app-felinos',
  templateUrl: './felinos.component.html',
  styleUrls: ['./felinos.component.css']
})



export class FelinosComponent implements OnInit {
  title_search = "Buscador de felinos";
  notFound = false;
  felino: Felino = {};
  felinos: Felino[];

  constructor( private felinoService: FelinosService ) { 
  }





  ngOnInit() {
    this.felinoService.getAllFelinos()
      .subscribe(
        (felinoApi: Felino[]) => {
          this.felinos = felinoApi;
          console.log(this.felinos);
          console.log([this.getFelino(this.felinos[0].name)]);

        }, error => console.error(error));
    
    console.log(this.felino);
  }

  getFelino(felinoName: string){
    this.notFound = false;

    console.log(felinoName);

    this.felinoService.getFelino(felinoName).subscribe((felinofrontheApi: Felino) =>{
      this.felino = felinofrontheApi[0];
      console.log(this.felino);

    this.felinoService.getImage(this.felino.reference_image_id).subscribe((imagefromApi:any) =>{
      this.felino.image = imagefromApi ;
      console.log(this.felino.image);
      console.log(this.felino.image.url);
    }, (error: any) => {
      console.error(error);
      this.notFound = true;
    }
    );
      
    }, (error: any) => {
      console.error(error);
      this.notFound = true;
    }
    );



  }


}
