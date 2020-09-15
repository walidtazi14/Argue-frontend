import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import {AlertifyService} from '../../_services/alertify.service';
import { User } from '../../_models/user';
import {FriendCardComponent } from '../friend-card/friend-card.component'

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService,private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser(){
        this.userService.getUsers().subscribe((users: User[])=>
        {this.users = users;}
        , error =>{
          this.alertify.error(error);
        })
  }

}
