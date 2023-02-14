import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Produit } from '../models/produits.models';
import { ProduitsService } from '../services/produits.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
})
export class ProduitsComponent implements OnInit {
  produits!: Array<Produit>;
  errorMessage!: string;
  searchFormGroup!: FormGroup;
  // injection du service avec comme type la classe ServiceProduits
  constructor(
    private produitsService: ProduitsService,
    private fb: FormBuilder
  ) {}

  // asynchrone avec appel ala methode  getAll qui va me retouner un objet
  //de type observable, je fais un subscribe vers cette observer
  // des que la donner arrive je la recupere et la stocke dans produits

  ngOnInit(): void {
    this.searchFormGroup = this.fb.group({
      keyword: this.fb.control(null),
    });
    // ngOninit se charge de recharger les produits
    this.handleGetAllProduits();
  }
  handleGetAllProduits() {
    this.produitsService.getAllProduits().subscribe({
      next: (data: any[]) => {
        return (this.produits = data);
      },
      error: (err) => {
        this.errorMessage = err;
      },
    });
  }

  HandleDeleteProduits(p: Produit) {
    //let index = this.produits.indexOf(p);
    //this.produits.splice(index,1);
    let conf = confirm('Are you sure to delete');
    if (conf == false) return;
    this.produitsService.deleteProduit(p.id).subscribe({
      next: (data) => {
        //this.handleGetAllProduits();
        let index = this.produits.indexOf(p);
        this.produits.splice(index, 1);
      },
    });
  }

  handleSetPromotion(p: Produit) {
    let promo = p.promotion;
    this.produitsService.setPromotion(p.id).subscribe({
      next: (data) => {
        console.log('ok');
        p.promotion = !promo;
      },
      error: (err) => {
        this.errorMessage = err;
      },
    });
  }

  public handleSearchProduits() {
    let keyword = this.searchFormGroup.value.keyword;
    this.produitsService.searchProduits(keyword).subscribe({
      // je cherche des produits
      next: (data) => {
        // une fois les donner
        this.produits = data; // je lai stocke
      },
    });
  }
}
