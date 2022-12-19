import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { resolveForwardRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any= {}
  getData: boolean;
  users:any;
  constructor(private userservice  :UserserviceService  ,private router: Router ,public Http:HttpClient) { }

  ngOnInit(): void {
    let response =this.Http.get('http://localhost:8080/User/getAllUsers');
response.subscribe((data)=>console.log(data))
  }
add(log:{email_util:string,password_util:string}){
let response =this.Http.get('http://localhost:8080/User/getAllUsers');
response.subscribe((data)=>{
  
  this.users =data; 
  for(let user of this.users){
    if(user.emailUtil != log.email_util){
      alert('maa 5demech');
    }else if(user.passwordUtil != log.password_util){
      alert('mot passe 8altaa');
    }else{
      this.router.navigate(['/produit'])
    }
  }
}) 
}
}
