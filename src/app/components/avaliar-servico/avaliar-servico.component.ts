import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-avaliar-servico',
  templateUrl: './avaliar-servico.component.html',
  styleUrls: ['./avaliar-servico.component.css']
})
export class AvaliarServicoComponent implements OnInit {

  constructor(private router : Router) { }

  avaliacao: any = [
    {value: 1,},
    {value: 2,},
    {value: 3,},
    {value: 4,},
    {value: 5,}
  ];

  ngOnInit(): void {
  }

  HomeCliente(){
   this.ExibirMensagem('Recebemos sua avaliação!', 'Sua avaliação é muito importante para nós!', 'success')
  }

  ExibirMensagem(mensagem : string, descricao: string, tipo : any){
    Swal.fire(
      mensagem,
      descricao,
      tipo
    ).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/home-cliente']);
      }
    })
  } 

}
