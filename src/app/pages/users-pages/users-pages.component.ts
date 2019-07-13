import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';
import { UserService } from '../../services/user.service';
import { HEADERS } from '../../../assets/mock-header';

@Component({
  selector: 'app-users-pages',
  templateUrl: './users-pages.component.html',
  styleUrls: ['./users-pages.component.css']
})
export class UsersPagesComponent implements OnInit {

  users: User[];
  headers = HEADERS;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.userService.getUsersList().subscribe( users => this.users = users);
  }

}
