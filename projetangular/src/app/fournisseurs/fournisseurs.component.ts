import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent implements OnInit {
  fournisseur:any
  constructor(public Http:HttpClient) { }

  ngOnInit(): void {
    let response=this.Http.get('http://localhost:8080/Fournisseur/all');
    response.subscribe((data)=>console.log(data));
  }

  deleteFournisseur(id:any){
    let response=this.Http.delete('http://localhost:8080/product/deletefournisseur/'+id);
    response.subscribe((data)=>this.fournisseur=data);
  }

}
