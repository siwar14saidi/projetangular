import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProduitComponent } from './produit/produit.component';
import { CategoriesComponent } from './categories/categories.component';
import { AdminComponent } from './admin/admin.component';
import { CommandesComponent } from './commandes/commandes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { AjoutercatComponent } from './ajoutercat/ajoutercat.component';
import { EditcatComponent } from './editcat/editcat.component';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    ProduitComponent,
    CategoriesComponent,
    AdminComponent,
    CommandesComponent,
    AddProduitComponent,
    FournisseursComponent,
    UpdateProduitComponent,
    AjoutercatComponent,
    EditcatComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

