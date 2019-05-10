import { User } from './../../model/user';
import { NbToastrService, NbGlobalPosition, NbGlobalPhysicalPosition } from '@nebular/theme';
import { JpbxService } from './../../services/jpbx.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { TokenStore } from '../../utils/token-store';
import { UserStore } from '../../utils/user-store';
import { Router } from '@angular/router';
import { NbToastStatus } from '@nebular/theme/components/toastr/model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  index = 1;
  destroyByClick = true;
  duration = 30000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbToastStatus = NbToastStatus.DANGER;
  user = new User;

  constructor(
    private fb: FormBuilder,
    private jpbx: JpbxService,
    private route: Router,
    private toast: NbToastrService
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
      this.makeToast('SUCESSO', 'opa');
      //this.route.navigate(['users']);
    },
    (err: HttpErrorResponse) => {
      this.makeToast('Calma ae! ', 'Estou trabalhando pra lançar o quanto antes. Seja paciente.' );
    });
  }
  makeToast(title: string, content: string) {
    this.showToast(this.status, title, content);
  }

  private showToast(type: NbToastStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? ` ${title}` : '';

    this.index += 1;
    this.toast.show(
      body,
      `${titleContent}`,
      config);
  }
}
