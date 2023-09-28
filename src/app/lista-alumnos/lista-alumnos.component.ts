import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent {

  alumnos = ['ANDREA PEREZ', 'juan lopez', 'rodrigo peña', 'Pedro Galleguillos', 'sofia castro'];
  
  tamanoLetra = 'grande';
  colorLista = 'blue';
  cantidadAlumnos = this.alumnos.length;

  getTamanoLetra(): object {
    return {
      'font-size': this.tamanoLetra === 'grande' ? '20px':'10px'
    }
  }
}
