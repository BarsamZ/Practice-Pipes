import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Practice-Pipes';
   a = 0.122 ;
   b = 500 ;
   name1 = "Barsam zameni barsam zameni";
   name2 = "Ali";
   d = new Date(10, 12, 17);

    coffee = {
      name: 'coffee',
      condition: 'good'
    };

    username = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        return resolve("barsam");
      }
        ,5000);
    }); 


   grocery = [

    {
      name:'milk',
      condition: 'expired'
    },
    {
      name:'cheese',
      condition: 'expired'
    },
    {
      name:'cheese',
      condition: 'expired'
    },
    {
      name:'juice',
      condition: 'expired'
    },
    {
      name:'jam',
      condition: 'expired'
    },
    {
      name:'hony',
      condition: 'good'
    },  
  ];
  filterString= '';



  addCoffee(){
    this.grocery.push(this.coffee);
  }
}
