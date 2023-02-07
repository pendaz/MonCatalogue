import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {


produits!: Array<any>;

  constructor() { }

  ngOnInit(): void {
    // initialise le tableau
    this.produits = [
      {id: 1 , name: " computer", price: 25000},
      {id: 2 , name: " printer", price: 75000},
      {id: 3 , name: " phone", price: 5000},
      {id: 4 , name: " desktop", price: 35000},
      {id: 5 , name: " came", price: 45000},
    ];
  }

}
