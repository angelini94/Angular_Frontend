import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Skill } from '../../model/Skill';
import { SkillService } from '../../services/skill.service';
import { Role } from '../../model/Role';
import { RoleService } from '../../services/role.service';
import { Status } from '../../model/Status';
import { StatusService } from '../../services/status.service';

@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.css']
})
export class FormDetailComponent implements OnInit {
  user: User;
  skills: Skill[];
  roles: Role[];
  statuses: Status[];

  constructor(
    private userService: UserService,
    private skillService: SkillService,
    private roleService: RoleService,
    private statusService: StatusService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {
    this.getUser();
    this.getSkillsList();
    this.getRolesList();
    this.getStatusesList();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
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

  save(): void {
    this.userService.updateUser(this.user)
      .subscribe( () => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
