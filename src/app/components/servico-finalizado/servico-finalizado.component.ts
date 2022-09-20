import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servico-finalizado',
  templateUrl: './servico-finalizado.component.html',
  styleUrls: ['./servico-finalizado.component.css']
})
export class ServicoFinalizadoComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  AvaliarServico(){
    this.router.navigate(['/avaliar-servico']);
  }

  Sos(){
    this.router.navigate(['/sos']);
  }

}
