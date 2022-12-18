import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  commande:any
  searchText:any;
  constructor(public Http:HttpClient) { }

  ngOnInit(): void {
    let response=this.Http.get('http://localhost:8080/commande/all');
    response.subscribe((data)=>this.commande=data);
  }

  deleteComm(id:any){
    let response=this.Http.delete('http://localhost:8080/product/deleteCommande/'+id);
    response.subscribe((data)=>this.commande=data);
  }
}
