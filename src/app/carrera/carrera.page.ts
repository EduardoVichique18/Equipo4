import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.page.html',
  styleUrls: ['./carrera.page.scss'],
})
export class CarreraPage implements OnInit {

  // Propiedad para almacenar la categoría seleccionada
  selectedCategory: string = '';

  constructor() { }

  ngOnInit() {
  }

  // Método opcional para manejar el cambio de categoría
  onCategoryChange(event: any) {
    console.log('Categoría seleccionada:', event.detail.value);
  }

}
