import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-offers',
  imports: [CommonModule],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {

  users = [
    {id:1, name: "Chingkhei"},
    {id:2, name: "Rohit"},
    {id:3, name: "Chetan"},
    {id:4, name: "Tomba"},
    {id:5, name: "Chaoba"},
  ]

  refresh() {
    this.users=[
      {id:1, name: "Chingkhei"},
    {id:2, name: "Rohit"},
    {id:3, name: "Chetan"},
    {id:4, name: "Canby"},
    {id:5, name: "Guliver"},
    ]
  }

  trackByUser(index:number, item: {id:number, name:string}){
    return item.id;
  }  

}
