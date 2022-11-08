import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoCadastro } from 'src/app/models/TipoCadastro';
import { CadastroLoginServiceService } from 'src/app/shared/cadastro-login-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(public service:CadastroLoginServiceService, private router: Router) { }

  ngOnInit(): void {
    this.tipoCadastro.id = window.localStorage.getItem('Id');
    this.PegarDados()
  }

  tipoCadastro : TipoCadastro = {
    id: 0,
    tipo: 0
  }

  sexos: any[] = [
    {value: 'Masculino'},
    {value: 'Feminino'},
  ];


  dadosPerfil = {
    cadastroId: 0,
    email: '',
    senha: '',
    telefone: '',
    nome:'',
    sexo: '',
    idade: '',
    tipoCliente: 0
  }

  Salvar(){
    this.service.AtualizarDadosUsuario(this.dadosPerfil).subscribe(
      response => {
       if (response == null) {
         this.ExibirMensagem('Erro', 'Não foi possível salvar!', 'warning')
       } else {
        this.ExibirMensagem('Erro', 'Alterações salvar com sucesso!', 'success')
       }
     },
     error => {console.log(error);}
   )
  }

  PegarDados(){
    this.service.PegarDadosUsuario(this.tipoCadastro).subscribe(
      response => {
        this.dadosPerfil = response
     },
     error => {console.log(error);}
   )
  }

  ExibirMensagem(mensagem : string, descricao: string, tipo : any){
    Swal.fire(
      mensagem,
      descricao,
      tipo
    ).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      this.router.navigate(['/home-cliente']);
    })
  } 


}
