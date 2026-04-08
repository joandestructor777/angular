import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavBar } from './component/navbar/navbar';
import { PrimerServicio } from './services/primer-servicio';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBar, RouterLink],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {

  constructor(private informacionService : PrimerServicio ){}

  ngOnInit(){
    const informacion = this.informacionService.devolverInformacion();
    console.log(informacion);
  }

  actualizarInformacion(mensajeNuevo : string){
    this.informacionService.actualizarInformacion(mensajeNuevo);
    console.log(this.informacionService.devolverInformacion());
  }
}