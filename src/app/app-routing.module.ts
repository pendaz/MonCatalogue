import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ProduitsComponent } from './produits/produits.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: '', component: LoginComponent },
  { path: 'produits', component: ProduitsComponent },
  { path: 'clients', component: ClientsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
