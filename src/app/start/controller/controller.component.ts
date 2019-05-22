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
    private jpbx: JpbxService
  ) { }

  ngOnInit() {
    this.jpbx.getServer('ping').subscribe(
      ret => this.router.navigate(['users']),
      error => this.router.navigate(['auth'])
    );
  }

}
