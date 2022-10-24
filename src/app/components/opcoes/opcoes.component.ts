import { TipoCadastro } from './../../models/TipoCadastro';
import { CadastroLoginServiceService } from 'src/app/shared/cadastro-login-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opcoes',
  templateUrl: './opcoes.component.html',
  styleUrls: ['./opcoes.component.css']
})
export class OpcoesComponent implements OnInit {

  constructor(private router : Router, public service:CadastroLoginServiceService) { }

  ngOnInit(): void {
    this.tipoCadastro.id = window.localStorage.getItem('Id')
  }

  // idCadastro : any = 0

  tipoCadastro : TipoCadastro = {
    id: 0,
    tipo: 0
  }

  VoltarLogin(){
    this.router.navigate(['']);
  }


  HomeCliente(){
    this.tipoCadastro.id = parseInt(this.tipoCadastro.id)
    this.tipoCadastro.tipo = 1
    this.service.SetTipoCadastroCliente(this.tipoCadastro).subscribe(
      response => {
        this.router.navigate(['/home-cliente']);
     },
     error => {console.log(error);}
   )
  }

  CadastrarServico(){
    this.tipoCadastro.id = parseInt(this.tipoCadastro.id)
    this.tipoCadastro.tipo = 2
    this.service.SetTipoCadastroCliente(this.tipoCadastro).subscribe(
      response => {
        this.router.navigate(['/cadastrar-servico']);
     },
     error => {console.log(error);}
   )
  }

}
