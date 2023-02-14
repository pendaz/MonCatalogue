//import { PageProduit } from './../models/produits.models';
import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Observable, of, throwError } from 'rxjs';
import { Produit } from '../models/produits.models';

@Injectable({
  providedIn: 'root',
})
export class ProduitsService {
  // on initialise un tableau de produits
  produits!: Array<Produit>;
  constructor() {
    /* { id: 2, name: ' printer', price: 75000, promotion: true },
      { id: 3, name: ' phone', price: 5000, promotion: true },
      { id: 4, name: ' desktop', price: 35000, promotion: false },
      { id: 5, name: ' came', price: 45000, promotion: true },*/
    // UUID tres pratique pour la gestion des id ou auto increment
    this.produits = [
      { id: UUID.UUID(), name: ' computer', price: 25000, promotion: true },
      { id: UUID.UUID(), name: ' printer', price: 75000, promotion: true },
      { id: UUID.UUID(), name: ' phone', price: 5000, promotion: true },
      { id: UUID.UUID(), name: ' desktop', price: 35000, promotion: false },
      { id: UUID.UUID(), name: ' came', price: 45000, promotion: true },
    ];
    for (let i = 0; i < 10; i++) {
      this.produits.push({
        id: UUID.UUID(),
        name: ' computer',
        price: 25000,
        promotion: true,
      });
      this.produits.push({
        id: UUID.UUID(),
        name: ' computer',
        price: 25000,
        promotion: true,
      });
      this.produits.push({
        id: UUID.UUID(),
        name: ' computer',
        price: 25000,
        promotion: true,
      });
      this.produits.push({
        id: UUID.UUID(),
        name: ' printer',
        price: 75000,
        promotion: true,
      });
      this.produits.push({
        id: UUID.UUID(),
        name: ' printer',
        price: 75000,
        promotion: true,
      });
      this.produits.push({
        id: UUID.UUID(),
        name: ' printer',
        price: 75000,
        promotion: true,
      });
      this.produits.push({
        id: UUID.UUID(),
        name: ' phone',
        price: 5000,
        promotion: true,
      });
      this.produits.push({
        id: UUID.UUID(),
        name: ' phone',
        price: 5000,
        promotion: true,
      });
      this.produits.push({
        id: UUID.UUID(),
        name: ' phone',
        price: 5000,
        promotion: true,
      });
      this.produits.push({
        id: UUID.UUID(),
        name: ' desktop',
        price: 35000,
        promotion: false,
      });
      this.produits.push({
        id: UUID.UUID(),
        name: ' desktop',
        price: 35000,
        promotion: false,
      });
      this.produits.push({
        id: UUID.UUID(),
        name: ' desktop',
        price: 35000,
        promotion: false,
      });
      this.produits.push({
        id: UUID.UUID(),
        name: ' desktop',
        price: 35000,
        promotion: false,
      });
      this.produits.push({
        id: UUID.UUID(),
        name: ' came',
        price: 45000,
        promotion: true,
      });
      this.produits.push({
        id: UUID.UUID(),
        name: ' came',
        price: 45000,
        promotion: true,
      });
      this.produits.push({
        id: UUID.UUID(),
        name: ' came',
        price: 45000,
        promotion: true,
      });
      this.produits.push({
        id: UUID.UUID(),
        name: ' came',
        price: 45000,
        promotion: true,
      });
    }
  }
  // gestion de l'asynchrone avec Observable
  public getAllProduits(): Observable<Produit[]> {
    return of(this.produits);
  }

  public deleteProduit(id: string): Observable<boolean> {
    this.produits = this.produits.filter((p) => p.id != id); // element  a filtrer dif de elmt a suprimer
    return of(true);
  }
  public setPromotion(id: string): Observable<boolean> {
    let produit = this.produits.find((p) => p.id == id);
    if (produit != undefined) {
      produit.promotion = !produit.promotion;
      return of(true);
    } else return throwError(() => new Error('produits notfound'));
  }
  public searchProduits(keyword: string): Observable<Produit[]> {
    let produits = this.produits.filter((p) => p.name.includes(keyword));
    return of(produits); // retourn des donner sous form dun observable
  }
}
