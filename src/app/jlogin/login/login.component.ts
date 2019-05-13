import { ToastService } from './../../services/toast.service';
import { User } from './../../model/user';
import { JpbxService } from './../../services/jpbx.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { TokenStore } from '../../utils/token-store';
import { UserStore } from '../../utils/user-store';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  user = new User;

  constructor(
    private fb: FormBuilder,
    private jpbx: JpbxService,
    private toast: ToastService
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
      new TokenStore().setToken(res.token);
      new UserStore().setUser(res.data);
      this.toast.makeToast('SUCESSO', 'opa', 'success');
      //this.route.navigate(['users']);
    },
    () => {
      this.toast.makeToast('PORRA ae! ', 'Estou trabalhando pra lançar o quanto antes. Seja paciente.', 'danger' );
    });
  }

}
