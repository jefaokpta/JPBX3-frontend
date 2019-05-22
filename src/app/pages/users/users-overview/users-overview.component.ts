import { JpbxService } from './../../../services/jpbx.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { User } from '../../../model/user';
import { TokenService } from '../../../services/token.service';
import { UserService } from '../user.service';

@Component({
  selector: 'ngx-users-overview',
  templateUrl: './users-overview.component.html',
  styleUrls: ['./users-overview.component.scss']
})
export class UsersOverviewComponent implements OnInit {

  users: User[];

  settings = {
    actions: {
      add: false,
      columnTitle: 'Ações'
    },
    pager: {
      perPage: 15
    },
    mode: 'external',
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      fullName: {
        title: 'Nome',
        type: 'string',
      },
      name: {
        title: 'Usuário',
        type: 'string',
      },
      level: {
        title: 'Nível',
        type: 'number',
      },
      company: {
        title: 'Empresa',
        type: 'number',
      },
    },
  };

  constructor(
    private jpbx: JpbxService,
    private route: Router,
    private token: TokenService,
    private userEdit: UserService
    ) {}
  onDeleteConfirm(event): void {
    console.log(event);
  }
  edita(event){
    this.userEdit.setUser(event.data);
    this.route.navigate(['pages/users/edit']);
  }
  ngOnInit() {
    this.jpbx.getServer('user').subscribe(data => {
      this.token.setToken(data.token);
      this.users = data.data;
    },
    err => {
      console.log(err);
      this.route.navigate(['auth']);
    });
  }

}
