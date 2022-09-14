import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preco-servico',
  templateUrl: './preco-servico.component.html',
  styleUrls: ['./preco-servico.component.css']
})
export class PrecoServicoComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  AguardarServico(){
    this.router.navigate(['/aguardar-servico']);
  }

}
