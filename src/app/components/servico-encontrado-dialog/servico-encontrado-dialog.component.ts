import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servico-encontrado-dialog',
  templateUrl: './servico-encontrado-dialog.component.html',
  styleUrls: ['./servico-encontrado-dialog.component.css']
})
export class ServicoEncontradoDialogComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  Aceitar(){
    this.router.navigate(['/destino-mecanico']);
  }

  Rejeitar(){
    window.location.reload();
  }

}
