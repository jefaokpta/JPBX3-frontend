import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private user: User = null;

  public getUser(): User{
    return this.user;
  }
  public setUser(u: User) {
    this.user = u;
  }
}
