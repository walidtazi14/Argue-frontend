import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import {AlertifyService} from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    model:any={};
  constructor(public authService: AuthService,private alertifyService: AlertifyService, private router: Router) { }

  ngOnInit() {
  }
  login(){
    this.authService.login(this.model).subscribe(next => {
      this.router.navigate(['/subject']);
      this.alertifyService.success('sucessful');} ,error=>{
        this.alertifyService.error('failed');
      }
    )
  }

  loggedIn(){
    console.log(this.authService.loggedIn());
    return this.authService.loggedIn();  
  }
  logout(){
    localStorage.removeItem('token');
    this.alertifyService.message('loggedou');
    this.router.navigate(['/home']);
  }

}
