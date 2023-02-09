import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Produit } from '../models/produits.models';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
// on initialise un tableau de produits
private produits! : Array<Produit>
  constructor() { 
    this.produits = [
      {id: 1 , name: " computer", price: 25000, promotion:true},
      {id: 2 , name: " printer", price: 75000, promotion:true },
      {id: 3 , name: " phone", price: 5000,promotion:true },
      {id: 4 , name: " desktop", price: 35000,promotion:false},
      {id: 5 , name: " came", price: 45000,promotion:true},
    ];
  }
  // gestion de l'asynchrone avec Observable
  public getAllProduits() : Observable <Produit[]>{
    return of(this.produits)
  }
   public deleteProduit(id: number): Observable<boolean>{
    this.produits = this.produits.filter(p=>p.id!=id); // element  a filtrer dif de elmt a suprimer
   return of(true);
  }
}
