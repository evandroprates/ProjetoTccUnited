import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CadastroLoginServiceService {

  constructor(private http:HttpClient) { }

  readonly baseUrl = 'http://localhost:64992/api/Cadastro'

  postCadastrar(dadosCadastrais : any) : Observable<any> {
    return  this.http.post(this.baseUrl + '/Cadastrar', dadosCadastrais);
  }

  Login(dadosLogin : any) : Observable<any> {
    return  this.http.post(this.baseUrl + '/Login', dadosLogin);
  }

  SetTipoCadastroCliente(id : number) {
    return  this.http.post(this.baseUrl + '/SetTipoCadastroCliente', id);
  }
}
