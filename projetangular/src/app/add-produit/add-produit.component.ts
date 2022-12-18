import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',

  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  constructor(public Http:HttpClient) {}

  ngOnInit(): void {
  }
  
add(prd:{dateAjoutPrd:Date,descriptionPrd:string,libPrd:string,prixLivraison:number,prixPrd:number,famille:any,laboratoire:any}){
  this.Http.post('http://localhost:8080/product/add', prd).subscribe((data) => console.log(data));

}
 
}
