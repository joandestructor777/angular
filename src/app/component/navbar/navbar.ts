import { FormsModule } from '@angular/forms';
import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector:'app-navbar',
  standalone: true,
  imports:[FormsModule],
  templateUrl:'./navbar.html',
  styleUrls:['./navbar.css']
})

export class NavBar{ 
  @Input() mensajeBienvenida : string = "";

  // parte del output 
  @Output() mensajeCliente = new EventEmitter();

  // metodo para actualizar la informacion que contiene mensajeCliente
  insertarInformacionEnMensajeCliente(){
    const mensajeClienteParametro = "Estoy encantado de visitarlos de nuevo, la comida aqui es increible!"; 
    this.mensajeCliente.emit(mensajeClienteParametro);
  }
}



