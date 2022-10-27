import { TipoCadastro } from './../models/TipoCadastro';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CadastroLoginServiceService {

  constructor(private http:HttpClient) { }

  readonly baseUrl = 'http://localhost:64992/api/Cadastro'
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')

  postCadastrar(dadosCadastrais : any) : Observable<any> {
    return  this.http.post(this.baseUrl + '/Cadastrar', dadosCadastrais);
  }

  Login(dadosLogin : any) : Observable<any> {
    return  this.http.post(this.baseUrl + '/Login', dadosLogin);
  }

  SetTipoCadastroCliente(tipoCadastro : TipoCadastro) {
    return  this.http.post(this.baseUrl + '/SetTipoCadastroCliente', tipoCadastro);
  }

  PegarServicos(): Observable<any>{
    return this.http.get(this.baseUrl+ '/PegarServicos', { headers: this.headers})
  }

  CadastrarServicosMecanico(servicos : any): Observable<any>{
    return this.http.post(this.baseUrl+ '/CadastrarServicosMecanico', servicos)
  }

  PegarServicosMecanico(id : any): Observable<any>{
    return this.http.post(this.baseUrl+ '/PegarServicosMecanico', JSON.parse(id))
  }

  CadastrarPrecoServicosMecanico(servicos : any): Observable<any>{
    return this.http.post(this.baseUrl+ '/CadastrarPrecoServicosMecanico', servicos)
  }
}
