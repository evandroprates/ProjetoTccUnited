import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sos',
  templateUrl: './sos.component.html',
  styleUrls: ['./sos.component.css']
})
export class SosComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  VoltarServicoFinalizado(){
    this.router.navigate(['/servico-finalizado']);
  }

  InformarOcorrencia(){
    this.ExibirMensagem('Recebemos sua ocorrência!', 'Pedimos desculpas pelo ocorrido, como forma de desculpas iremos disponibilizar um cupom de R$ 20,00 para usar em nossos serviços.', 'success')
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
