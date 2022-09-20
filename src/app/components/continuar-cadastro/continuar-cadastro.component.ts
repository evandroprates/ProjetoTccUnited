import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroLoginServiceService } from 'src/app/shared/cadastro-login-service.service';

@Component({
  selector: 'app-continuar-cadastro',
  templateUrl: './continuar-cadastro.component.html',
  styleUrls: ['./continuar-cadastro.component.css']
})
export class ContinuarCadastroComponent implements OnInit {

  constructor(private router: Router, public service:CadastroLoginServiceService) { }

  ngOnInit(): void {
  }

  Continuar(){
    this.router.navigate(['/opcoes']);
  }

}
