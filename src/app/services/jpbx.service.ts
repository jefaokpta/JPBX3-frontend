import { TokenStore } from './../utils/token-store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../model/message';


@Injectable({
  providedIn: 'root'
})
export class JpbxService {

  private url = 'http://localhost:8080/jpbx3/ws/';
  private token = new TokenStore;

  constructor(private http: HttpClient) { }

  public getServer(page: string) {
    console.log(page + ' - ' + this.token.getToken());
    return this.http.get<Message>(this.url + page, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'authorization': this.token.getToken()
      })
    });
  }
  public postServer(page: string, data){
    console.log(page + ' - ' + this.token.getToken());
    return this.http.post<Message>(this.url + page, data, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'authorization': this.token.getToken()
      })
    });
  }
}
