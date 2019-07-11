import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MailModel } from '../models/mail.model';
import { LogModel } from '../models/login.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getMails() {
    return this.httpClient.get(`https://prueba-seleccion-granada.herokuapp.com/inbox`);
  }

  public getSents() {
    return this.httpClient.get(`https://prueba-seleccion-granada.herokuapp.com/sent`);
  }

  public getDelete(body) {
    return this.httpClient.request('delete', `https://prueba-seleccion-granada.herokuapp.com/inbox/delete`, {body});
  }

  addMail( mail: MailModel) {
    console.log('mail', mail);
    return this.httpClient.post(`https://prueba-seleccion-granada.herokuapp.com/send`, mail);
  }

  logIn( log: LogModel) {
    console.log('log', log);
    return this.httpClient.post(`https://prueba-seleccion-granada.herokuapp.com/login`, log);
  }

}
