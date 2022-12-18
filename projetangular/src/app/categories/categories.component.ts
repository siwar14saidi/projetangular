import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  famille:any
  searchText:any;
  constructor(public Http:HttpClient) { }

  ngOnInit(): void {
    let response=this.Http.get('http://localhost:8080/famille/all');
    response.subscribe((data)=>this.famille=data);
  }

  deleteCat(id:any){
    let response=this.Http.delete('http://localhost:8080/product/deletefamille/'+id);
    response.subscribe((data)=>this.famille=data);
  }
}
