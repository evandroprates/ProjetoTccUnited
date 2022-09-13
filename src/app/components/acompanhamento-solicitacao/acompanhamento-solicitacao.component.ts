import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acompanhamento-solicitacao',
  templateUrl: './acompanhamento-solicitacao.component.html',
  styleUrls: ['./acompanhamento-solicitacao.component.css']
})
export class AcompanhamentoSolicitacaoComponent implements OnInit {

  constructor(private router: Router) { }

  loading: boolean = true

  ngOnInit(): void {
    setTimeout( () => 
    this.DesabilitarLoading()
    , 3000 );
  }

  DesabilitarLoading(){
    this.loading = false,
    this.router.navigate(['/preco-servico'])
  }

  VoltarMenuCliente(){
    this.router.navigate(['/menu-cliente']);
  }

}
