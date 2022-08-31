import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dadosLogin = {
    login: null,
    senha: null
  }

  dadosCadastro = {
    login: null,
    email: null,
    senha: null
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Logar(){
    this.router.navigate(['/localizacao']);
  }

  Cadastrar(){
    this.ExibirMensagem('Sucesso', 'Cadastrado com Sucesso!', 'success')
  }

  ExibirMensagem(mensagem : string, descricao: string, tipo : any){
    Swal.fire(
      mensagem,
      descricao,
      tipo
    ).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.router.navigate(['/localizacao']);
      }
    })
  } 

}



