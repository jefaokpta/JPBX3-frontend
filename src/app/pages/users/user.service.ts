import { User } from './../../model/user';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User;
  constructor() { }

  getUser(){
    return this.user;
  }
  setUser(u: User){
    this.user = u;
  }
}
