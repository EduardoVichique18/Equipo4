import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage  {

  constructor() { }

  showMaterias = false; // Inicialmente oculto

  toggleMaterias() {
    this.showMaterias = !this.showMaterias;
  }
  listaMaterias = [
    { nombre: 'Materia 1', p1: 8.5, p2: 9.0, f: 8.75 },
    { nombre: 'Materia 2', p1: 7.5, p2: 8.0, f: 7.75 },
    { nombre: 'Materia 3', p1: 9.0, p2: 9.5, f: 9.25 },
    { nombre: 'Materia 4', p1: 6.5, p2: 7.0, f: 6.75 },
    { nombre: 'Materia 5', p1: 10.0, p2: 9.5, f: 9.75 }
  ];
  

}