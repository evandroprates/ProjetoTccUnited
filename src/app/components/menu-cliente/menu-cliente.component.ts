import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-cliente',
  templateUrl: './menu-cliente.component.html',
  styleUrls: ['./menu-cliente.component.css']
})
export class MenuClienteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  AcompanhamentoSolicitacao(){
    this.router.navigate(['/acompanhamento-solicitacao-cliente']);
  }

  VoltarHome(){
    this.router.navigate(['/home-cliente']);
  }

}
