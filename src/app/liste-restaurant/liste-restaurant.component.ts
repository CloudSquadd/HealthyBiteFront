import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data.service';
@Component({
  selector: 'liste-restaurant',
  templateUrl: './liste-restaurant.component.html',
  styleUrls: ['./liste-restaurant.component.scss'],
  providers: [DataService],
 
})
export class ListeRestaurantComponent implements OnInit{

restaurant:any[]=[]

  constructor(private dataService:DataService) { }

  ngOnInit(){

    
 this.dataService.getAllRestaurant().subscribe(data=>{
      for(let i=0;i<data.length;i++)
      {

        this.restaurant.push(data[i]);
        console.log(this.restaurant);
      }
 console.log(this.restaurant);
    });
 
  }


}
