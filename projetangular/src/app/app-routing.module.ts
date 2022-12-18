import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { AdminComponent } from './admin/admin.component';
import { AjoutercatComponent } from './ajoutercat/ajoutercat.component';
import { CategoriesComponent } from './categories/categories.component';
import { CommandesComponent } from './commandes/commandes.component';
import { EditcatComponent } from './editcat/editcat.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProduitComponent } from './produit/produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';

const routes: Routes = [
  
  {
    path:'',
    component:LoginComponent

  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'produit',
    component:ProduitComponent
  },
  {
    path:'categories',
    component:CategoriesComponent
  },
  {
    path:'facture',
    component:AdminComponent
  },
  {
    path:'add-produit',
    component:AddProduitComponent
  },
  {
    path:'fournisseurs',
    component:FournisseursComponent
  },
  {
    path:'editproduit',
    component:UpdateProduitComponent
  },
  {
    path:'add-cat',
    component:AjoutercatComponent
  },
  {
    path:'edit-cat',
    component:EditcatComponent
  },
  {
    path:'commande',
    component:CommandesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
