import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.component.html',
  styleUrls: ['./localizacao.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LocalizacaoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  VoltarLogin(){
    this.router.navigate(['']);
  }

  Opcoes(){
    this.router.navigate(['/opcoes']);
  }

}
