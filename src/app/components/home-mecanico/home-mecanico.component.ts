import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-mecanico',
  templateUrl: './home-mecanico.component.html',
  styleUrls: ['./home-mecanico.component.css']
})
export class HomeMecanicoComponent implements OnInit {

  constructor(private router: Router) { }
  
  ngOnInit(): void {}
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

  BuscarServico(){
    this.router.navigate(['/buscar-servico']);
  }

}
