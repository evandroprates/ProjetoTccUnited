import { ServicoEncontradoDialogComponent } from './../servico-encontrado-dialog/servico-encontrado-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-buscar-servicos',
  templateUrl: './buscar-servicos.component.html',
  styleUrls: ['./buscar-servicos.component.css']
})
export class BuscarServicosComponent implements OnInit {

  constructor(public dialog: MatDialog) {}


  loading: boolean = true

  ngOnInit(): void {
    setTimeout( () => 
    this.DesabilitarLoading()
    , 5000 );
  }
  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 24,
      lng: 12
  };
  zoom = 4;
  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }

  DesabilitarLoading(){
    this.loading = false;
    this.openDialog('0ms', '0ms')
    // this.router.navigate(['/servico-finalizado'])
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ServicoEncontradoDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
