import { Component, OnInit } from '@angular/core';
import {User} from '../../model/User';
import {UserService} from '../../services/user.service';
import {Skill} from '../../model/Skill';
import {Role} from '../../model/Role';
import {Status} from '../../model/Status';
import {SkillService} from '../../services/skill.service';
import {RoleService} from '../../services/role.service';
import {StatusService} from '../../services/status.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User = new User();
  submitted = false;
  skills: Skill[];
  roles: Role[];
  statuses: Status[];

  constructor(
    private userService: UserService,
    private skillService: SkillService,
    private roleService: RoleService,
    private statusService: StatusService
  ) { }


  ngOnInit() {
    this.getSkillsList();
    this.getRolesList();
    this.getStatusesList();
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  create() {
    this.userService.createUser(this.user).subscribe((result) => {
      if (result) {
        this.submitted = true;
      }
    });
  }

  onSubmit() {
    this.create();
  }

  getSkillsList(): void {
    this.skillService.getSkillsList()
      .subscribe(skills => this.skills = skills);
  }

  getRolesList(): void {
    this.roleService.getRolesList()
      .subscribe(roles => this.roles = roles);
  }

  getStatusesList(): void {
    this.statusService.getStatusesList()
      .subscribe(statuses => this.statuses = statuses);
  }

  compareById(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }
}
