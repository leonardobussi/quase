import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  contatosUrl = "https://quase.herokuapp.com/"

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.contatosUrl}`);
  }
}
