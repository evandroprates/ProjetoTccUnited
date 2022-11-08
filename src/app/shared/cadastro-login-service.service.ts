import { TipoCadastro } from './../models/TipoCadastro';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CadastroLoginServiceService {

  constructor(private http:HttpClient) { }

  readonly baseUrlCadastro = 'http://localhost:64992/api/Cadastro'
  readonly baseUrlPerfil = 'http://localhost:64992/api/Perfil'
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')

  postCadastrar(dadosCadastrais : any) : Observable<any> {
    return  this.http.post(this.baseUrlCadastro + '/Cadastrar', dadosCadastrais);
  }

  Login(dadosLogin : any) : Observable<any> {
    return  this.http.post(this.baseUrlCadastro + '/Login', dadosLogin);
  }

  SetTipoCadastroCliente(tipoCadastro : TipoCadastro) {
    return  this.http.post(this.baseUrlCadastro + '/SetTipoCadastroCliente', tipoCadastro);
  }

  PegarServicos(): Observable<any>{
    return this.http.get(this.baseUrlCadastro+ '/PegarServicos', { headers: this.headers})
  }

  CadastrarServicosMecanico(servicos : any): Observable<any>{
    return this.http.post(this.baseUrlCadastro+ '/CadastrarServicosMecanico', servicos)
  }

  PegarServicosMecanico(id : any): Observable<any>{
    return this.http.post(this.baseUrlCadastro+ '/PegarServicosMecanico', JSON.parse(id))
  }

  CadastrarPrecoServicosMecanico(servicos : any): Observable<any>{
    return this.http.post(this.baseUrlCadastro+ '/CadastrarPrecoServicosMecanico', servicos)
  }

  PegarDadosUsuario(cadastro : any) : Observable<any> {
    return  this.http.post(this.baseUrlPerfil + '/PegarDadosUsuario', cadastro);
  }

  AtualizarDadosUsuario(cadastro : any) : Observable<any> {
    return  this.http.post(this.baseUrlPerfil + '/AtualizarDadosUsuario', cadastro);
  }

}
