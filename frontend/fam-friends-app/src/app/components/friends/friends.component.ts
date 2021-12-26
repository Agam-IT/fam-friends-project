import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FriendsService } from 'src/app/services/friends.service';
import { LoginService } from 'src/app/services/login.service';
import { friends } from 'src/app/models/friends';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
})
export class FriendsComponent implements OnInit {
  friendsList: any;
  constructor(
    private friendsServices: FriendsService,
    private router: Router,
    private login: LoginService
  ) {}

  ngOnInit() {
    if (!this.login.isLoggedIn()) {
      this.router.navigate(['/login']);
    } else
      this.friendsServices.getFriends().subscribe((friends) => {
        this.friendsList = friends;
        console.log(friends);
      });
  }
}