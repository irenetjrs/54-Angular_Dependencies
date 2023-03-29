import { Component } from '@angular/core';
import { UsersGroupService } from '../service/users-group.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public UserGroupService: UsersGroupService){}
  newGroupName = '';
  groupNameEdit() {
    this.UserGroupService.groupName = this.newGroupName;
    this.newGroupName = '';
  }
}
