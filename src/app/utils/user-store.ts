import { User } from '../model/user';
import { Injectable } from '@angular/core';

@Injectable()
export class UserStore {
  private user: User;

  public getUser(){
    return this.user;
  }
  public setUser(u: User) {
    this.user = u;
  }
}
