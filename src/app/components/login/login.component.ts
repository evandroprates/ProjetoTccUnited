import { CadastroLoginServiceService } from './../../shared/cadastro-login-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  dadosLoginVerificacao : boolean = false;

  dadosCadastroVerificacao : boolean = false;

  dadosLogin = {
    email: '',
    senha: ''
  }

  dadosCadastro = {
    email: '',
    senha: '',
    telefone: '',
    nome:'',
    sexo: '',
    idade: '',
    tipoCliente: 0
  }

  sexos: any[] = [
    {value: 'Masculino'},
    {value: 'Feminino'},
  ];

  constructor(private router: Router, public service:CadastroLoginServiceService) { }

  ngOnInit() {
    console.log("ui")
  }

  Logar(){
    this.service.Login(this.dadosLogin).subscribe(
      response => {
       if (response == null) {
         this.ExibirMensagem('Erro', 'Não possui cadastro!', 'warning', response)
       } else {
        if (response.TipoCliente == 1) {
          this.router.navigate(['/home-cliente']);
        } else if (response.TipoCliente == 2) {
          // this.router.navigate(['/home-mecanico']);
        } else {
          window.localStorage.setItem('Id', response.cadastroId)
          this.router.navigate(['/opcoes']);
        }
       }
     },
     error => {console.log(error);}
   )
  }

  Cadastrar(){
    if (this.dadosCadastro.email == '' || this.dadosCadastro.senha == '' || this.dadosCadastro.telefone == '' || this.dadosCadastro.nome == '' || this.dadosCadastro.sexo == '' || this.dadosCadastro.idade == '') {
      this.dadosCadastroVerificacao = false;
      this.ExibirMensagem('Erro', 'Insira todos os dados!', 'warning', null)
    } else{
      this.dadosCadastroVerificacao = true;
      this.dadosCadastro.telefone = this.dadosCadastro.telefone.toString()
      this.service.postCadastrar(this.dadosCadastro).subscribe(
         response => {
          if (response != null) {
            this.ExibirMensagem('Erro', 'Esse email já está cadastrado', 'warning', response)
          } else {
            this.ExibirMensagem('Sucesso', 'Cadastrado com Sucesso, faça o login para continuar!', 'success', response)
            // window.localStorage.setItem('Id', response.Id)
          }
        },
        error => {console.log(error);}
      )

      }

  }
  

  ExibirMensagem(mensagem : string, descricao: string, tipo : any, response : any){
    Swal.fire(
      mensagem,
      descricao,
      tipo
    ).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed && (this.dadosCadastroVerificacao == true || this.dadosLoginVerificacao == true) && response == null) {
        // this.router.navigate(['/opcoes']);
      }
    })
  } 

}



