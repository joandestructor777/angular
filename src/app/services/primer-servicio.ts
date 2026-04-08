import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PrimerServicio {

  constructor(){}
  mensaje : string = "esta información viene del servicio"

  devolverInformacion(): string{
    return this.mensaje;
  }

  actualizarInformacion(mensajeNuevo: string): void{
    this.mensaje = mensajeNuevo;
  }
}
