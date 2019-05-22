import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getUser(): User{
    try {
      return JSON.parse(localStorage.getItem('JPBXUSER')) || 'NADA';
    } catch (e) {
      console.error('Erro ao solicitar USUARIO localStorage', e);
    }
  }
  public setUser(u: User) {
    try {
      localStorage.setItem('JPBXUSER', JSON.stringify(u));
    } catch (e) {
      console.error('Erro ao salvar USUARIO localStorage', e);
    }
  }
}
