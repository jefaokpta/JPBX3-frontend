import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  private token: string = 'empty';

  public getToken(){
    return this.token;
    //try {
    //  return JSON.parse(localStorage.getItem('JPBXTOKEN')) || 'NADA';
    //} catch (e) {
    //  console.error('Erro ao solicitar TOKEN localStorage', e);
    //  return 'nadinha';
    //}
  }
  public setToken(t: string){
    this.token = t;
    //try {
    //  localStorage.setItem('JPBXTOKEN', JSON.stringify(t));
    //} catch (e) {
    //  console.error('Erro ao salvar TOKEN localStorage', e);
    //}
  }
}
