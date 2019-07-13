import { Component, Input, OnInit } from '@angular/core';
import { get } from 'lodash';
import { orderBy } from 'lodash';
import { join } from 'lodash';
import { BUTTONS } from '../../../assets/mock-button';
import {User} from '../../model/User';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Input() headerTable = [];
  @Input() items = [];
  buttons = BUTTONS;
  current: string;
  arrow = 'fa fa-arrow-circle-down';
  flag = true;
  page = 1;
  pageSize = 5;
  searchText;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  getColumn(item, column): string {
    const result = get(item, column.columnName );
    if (result instanceof Array) {
      return join( result.map((skill) => get(skill, column.param )), ', ');
    } else {
    return result;
    }
  }

  delete(user: User): void {
      this.items = this.items.filter( i => i !== user );
      this.userService.deleteUser(user).subscribe();
  }

  orderBy(column) {
    if (this.flag) {
      this.items = orderBy(this.items, [column], ['desc']);
      this.flag = false;
      this.arrow = 'fa fa-arrow-circle-up';
    } else {
      this.items = orderBy(this.items, [column], ['asc']);
      this.flag = true;
      this.arrow = 'fa fa-arrow-circle-down';
    }
    this.current = column;
  }
}
