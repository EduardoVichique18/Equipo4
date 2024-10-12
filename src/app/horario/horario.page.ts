import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  downloadPDF() {
    const link = document.createElement('a');
    link.href = 'assets/7A-TIDSM-DZ.pdf';  // Ruta al archivo en la carpeta assets
    link.setAttribute('download', '7A-TIDSM-DZ.pdf'); // Nombre del archivo a descargar
    document.body.appendChild(link); // Necesario para Firefox
    link.click();
    document.body.removeChild(link); // Elimina el enlace después de hacer clic
  }

}
