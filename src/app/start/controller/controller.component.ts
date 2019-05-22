import { HttpErrorResponse } from '@angular/common/http';
import { ExceptionService } from './../../services/exception.service';
import { JpbxService } from './../../services/jpbx.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit {

  constructor(
    private router: Router,
    private jpbx: JpbxService,
    private except: ExceptionService
  ) { }

  ngOnInit() {
    this.jpbx.getServer('ping').subscribe(
      ret => this.router.navigate(['users']),
      (error: HttpErrorResponse) => {
        console.log(error);
        if(error.status){
          //this.except.setMsg('Sessão Expirada');
          this.router.navigate(['auth']);
          return;
        }
        this.except.setMsg('Servidor Offline');
        this.router.navigate(['auth']);
      },
    );
  }

}
