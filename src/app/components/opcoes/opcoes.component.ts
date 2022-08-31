import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opcoes',
  templateUrl: './opcoes.component.html',
  styleUrls: ['./opcoes.component.css']
})
export class OpcoesComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  VoltarLocalizacao(){
    this.router.navigate(['/localizacao']);
  }

  HomeCliente(){
    this.router.navigate(['/home-cliente']);
  }

}
