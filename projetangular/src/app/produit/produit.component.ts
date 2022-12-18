import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})

export class ProduitComponent implements OnInit {
  
  products:any
  searchText:any;
    constructor(public Http:HttpClient) { }

  ngOnInit(): void {
    let response=this.Http.get('http://localhost:8080/product/findallproduct');
    response.subscribe((data)=>this.products=data);
    
  }

  deleteProuit(id:number){
    let response=this.Http.delete('http://localhost:8080/product/deleteProduit/'+id);
    response.subscribe((data)=>this.products=data);
    window.location.reload()
  }


}
