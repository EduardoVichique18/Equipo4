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

}