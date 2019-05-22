import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExceptionService {

  constructor() { }
  private msg: string;

  getMsg(){
    return this.msg;
  }
  setMsg(msg: string){
    this.msg = msg;
  }
}
