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
    this.idCadastro = window.localStorage.getItem('Id')
  }

  idCadastro : any = 0

  VoltarLogin(){
    this.router.navigate(['']);
  }


  HomeCliente(){
    this.idCadastro = parseInt(this.idCadastro)
    this.service.SetTipoCadastroCliente(this.idCadastro).subscribe(
      response => {
        this.router.navigate(['/home-cliente']);
     },
     error => {console.log(error);}
   )
  }

  HomeMecanico(){
    // this.router.navigate(['/home-cliente']);
  }

}
