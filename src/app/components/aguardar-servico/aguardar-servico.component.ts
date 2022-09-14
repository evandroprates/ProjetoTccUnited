import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aguardar-servico',
  templateUrl: './aguardar-servico.component.html',
  styleUrls: ['./aguardar-servico.component.css']
})
export class AguardarServicoComponent implements OnInit {

  constructor(private router: Router) { }

  loading: boolean = true

  ngOnInit(): void {
    setTimeout( () => 
    this.DesabilitarLoading()
    , 3000 );
  }

  DesabilitarLoading(){
    this.loading = false
    // this.router.navigate(['/preco-servico'])
  }

}
