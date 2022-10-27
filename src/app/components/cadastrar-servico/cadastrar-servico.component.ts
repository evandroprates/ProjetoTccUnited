import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroLoginServiceService } from 'src/app/shared/cadastro-login-service.service';

@Component({
  selector: 'app-cadastrar-servico',
  templateUrl: './cadastrar-servico.component.html',
  styleUrls: ['./cadastrar-servico.component.css']
})
export class CadastrarServicoComponent implements OnInit {

  constructor(private router : Router, public service:CadastroLoginServiceService) { }

  ngOnInit(): void {
    this.PegarServicos();
  }

  cadastroId : any

  servicos: any = []

  servicosSelecionados: any = []

  VoltarOpcoes(){
    this.router.navigate(['/opcoes']);
  }  

  PegarServicos(){
    this.service.PegarServicos().subscribe(
      response => {
        this.servicos = response
        console.log(this.servicos)
      },
      error => {console.log(error);}
    )
  }

  checkCheckBoxvalue(event : any, servico : string){
    if (event.checked == true) {

      var cadastroServicos = {
          id: 0,
          IdCadastro: window.localStorage.getItem('Id'),
          servico : '',
          valor : 0
        }
        // var a = this.servicosSelecionados.includes(servico)
        cadastroServicos.servico = servico.trim()
        this.servicosSelecionados.push(cadastroServicos)
        console.log(this.servicosSelecionados)

    } else {
      this.servicosSelecionados.pop(servico.trim())
      console.log(this.servicosSelecionados)
    }
  }

  SalvarServicos(){
    this.service.CadastrarServicosMecanico(this.servicosSelecionados).subscribe(
      response => {
        this.servicos = response
      },
      error => {console.log(error);}
    )

    this.router.navigate(['/cadastrar-precos']);
  }
  

}
