import { JpbxService } from './../../../services/jpbx.service';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-users-overview',
  templateUrl: './users-overview.component.html',
  styleUrls: ['./users-overview.component.scss']
})
export class UsersOverviewComponent implements OnInit {

  settings = {
    actions: {
      add: false,
      columnTitle: 'Ações'
    },
    pager: {
      perPage: 15
    },
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
      firstName: {
        title: 'Nome',
        type: 'string',
      },
      lastName: {
        title: 'Usuário',
        type: 'string',
      },
      username: {
        title: 'Nível',
        type: 'string',
      },
      email: {
        title: 'Empresa',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private service: SmartTableData,
    private jpbx: JpbxService,
    private route: Router
    ) {
    const data = this.service.getData();
    this.source.load(data);
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  ngOnInit() {
    this.jpbx.getServer('user').subscribe(data => {
      console.log(data);
    },
    err => {
      console.log(err);
      this.route.navigate(['auth']);
    });
  }

}
