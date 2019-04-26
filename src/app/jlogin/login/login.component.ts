import { JpbxService } from './../../services/jpbx.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { TokenStore } from '../../utils/token-store';
import { UserStore } from '../../utils/user-store';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private jpbx: JpbxService
    ) { }

  ngOnInit() {
    this.formulario = this.fb.group({
      name: [],
      password: [],
    });
  }

  onSubmit(){
    this.formulario.controls.password.setValue(Md5.hashStr(this.formulario.controls.name.value+':'+this.formulario.controls.password.value));
    this.jpbx.postServer('login', this.formulario.value).subscribe(res => {
      console.log(res.token)
      new TokenStore().setToken(res.token);
      new UserStore().setUser(res.data);
    }),
    (err => console.log('FAIOU!' + err));
  }
}
