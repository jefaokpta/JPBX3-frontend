import { TokenService } from './../../services/token.service';
import { User } from './../../model/user';
import { JpbxService } from './../../services/jpbx.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  loginError: boolean;
  loginErrorMessage: string;
  user = new User;


  constructor(
    private fb: FormBuilder,
    private jpbx: JpbxService,
    private route: Router,
    private token: TokenService,
    private userStore: UserService
    ) { }

  ngOnInit() {
    this.formulario = this.fb.group({
      name: [],
      password: [],
    });
  }

  onSubmit(){
    this.formulario.controls.password.setValue(Md5.hashStr(this.formulario.controls.name.value+':'+this.formulario.controls.password.value));
    this.user.name = this.formulario.controls.name.value;
    this.user.password = this.formulario.controls.password.value;
    this.jpbx.postServer('login', this.user).subscribe(res => {
      this.token.setToken(res.token);
      this.userStore.setUser(res.data);
      this.route.navigate(['users']);
    },
    (err: HttpErrorResponse) => {
      this.loginErrorMessage = err.error.message;
      this.loginError = true;
      console.log(err);
    });
  }

}
