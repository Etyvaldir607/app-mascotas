import { Component, OnInit } from '@angular/core';
import { Felino } from 'src/app/model/felino';
import { FelinosService } from 'src/app/services/felinos.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  title = "Buscardor Actual";
  notFound = false;
  felino: Felino = {}
  felinos: Felino[];


  constructor(private serviceAll : FelinosService ) { }


  ngOnInit() {
    this.serviceAll.getAllFelinos().subscribe((felinofrontheApi: Felino[]) =>{
      this.felinos = felinofrontheApi;
      console.log(this.felinos);
      this.felino = this.felinos[0];
    }, (error: any) => {
      console.error(error);
      this.notFound = true;
    }
    );

  }



  getFelinos(){
    this.serviceAll.getAllFelinos().subscribe((felinofrontheApi: Felino[]) =>{
      this.felinos = felinofrontheApi;
      console.log(this.felinos);
    }, (error: any) => {
      console.error(error);
      this.notFound = true;
    }
    );
  }




  SearchFelino(felinoName: string){
    this.notFound = false;
    console.log(felinoName);
    this.felinos.values;
    console.log(this.felinos);
    let obj = {}
    this.felinos.forEach(function(element){
      if(element.name == felinoName){
        obj = element;
      }
    }
    );
    this.felino = obj;
    console.log(this.felino);
  }

}
