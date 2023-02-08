import { Component, OnInit } from '@angular/core';
import { findIndex, observable } from 'rxjs';
import { Produit } from '../models/produits.models';
import { ProduitsService } from '../services/produits.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {


produits! : Array<Produit>;
errorMessage!:string
// injection du service avec comme type la classe ServiceProduits
  constructor(private produitsService : ProduitsService) { }

 
    // asynchrone avec appel ala methode  getAll qui va me retouner un objet
    //de type observable, je fais un subscribe vers cette observer
    // des que la donner arrive je la recupere et la stocke dans produits
     
    ngOnInit(): void { // ngOninit se charge de recharger les produits
    this.handleGetAllProduits();
  }
  handleGetAllProduits(){
    this.produitsService.getAllProduits().subscribe({
      next : (data : any[]) =>{
       return this.produits = data;
      },
      error : (err)=> {
 this.errorMessage=err;
      }
    
     });
  }
  
  
  HandleDeleteProduits(p: Produit){
    //let index = this.produits.indexOf(p);
    //this.produits.splice(index,1);
    let conf = confirm ("Are you sure to delete");
    if (conf==false) return;
  this.produitsService.deleteProduit(p.id).subscribe({
    next : (data)=> {
      //this.handleGetAllProduits();
      let index= this.produits.indexOf(p)
      this.produits.splice(index,1);
    },
  })




  }



}
