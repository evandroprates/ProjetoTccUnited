import { CadastroLoginServiceService } from 'src/app/shared/cadastro-login-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-precos',
  templateUrl: './cadastrar-precos.component.html',
  styleUrls: ['./cadastrar-precos.component.css']
})
export class CadastrarPrecosComponent implements OnInit {
  
  constructor(private router : Router, public service:CadastroLoginServiceService) { }

  ngOnInit(): void {
    this.PegarServicosMecanico();
  }

  cadastroId : any

  servicos: any = []

  servicosSelecionados: any = []

  VoltarOpcoes(){
    this.router.navigate(['/cadastrar-servico']);
  }  

  PegarServicosMecanico(){

    var id = window.localStorage.getItem('Id')

    this.service.PegarServicosMecanico(id).subscribe(
      response => {
        this.servicos = response
        console.log(this.servicos)
      },
      error => {console.log(error);}
    )
  }

  SalvarServicos(){
    this.service.CadastrarPrecoServicosMecanico(this.servicos).subscribe(
      response => {
        this.router.navigate(['/home-mecanico']);
      },
      error => {console.log(error);}
    )
  }

}
