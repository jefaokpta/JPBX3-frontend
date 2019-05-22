import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';

@Component({
  selector: 'ngx-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(
    private userService: UserService,
    private route: Router,
    private fb: FormBuilder
    ) { }
  form: FormGroup;
  user: User;

  ngOnInit() {
    if(this.userService.getUser() == null)
      this.route.navigate(['users']);
    this.user = this.userService.getUser();

    this.form = this.fb.group(this.user);
  }

}
