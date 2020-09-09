import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model={username:"",password:""};
  constructor(private auth : AuthService) {
    
   }

  ngOnInit() {
  }
  register(){

    this.auth.register(this.model).subscribe(()=>{console.log("reg sucess");},error=>{console.log(error);})
  }

}
