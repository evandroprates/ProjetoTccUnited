import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destino-mecanico',
  templateUrl: './destino-mecanico.component.html',
  styleUrls: ['./destino-mecanico.component.css']
})
export class DestinoMecanicoComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  FinalizarServico(){
    this.router.navigate(['/servico-finalizado']);
  }

}
