import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';



declare var google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class MapsPage implements OnInit {

  map: any;

  constructor() { }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    // Obtén el div donde el mapa será renderizado
    const mapDiv = document.getElementById('map') as HTMLElement;

    // Configura las opciones iniciales del mapa
    const options = {
      center: { lat: 0, lng: 0 },
      zoom: 15
    };

    // Inicializa el mapa de Google
    this.map = new google.maps.Map(mapDiv, options);

    // Obtener la ubicación actual del usuario
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        // Centra el mapa en la ubicación del usuario
        this.map.setCenter(userLocation);

        // Añadir un marcador en la ubicación actual
        new google.maps.Marker({
          position: userLocation,
          map: this.map,
          title: 'Tu ubicación'
        });

      }, () => {
        alert('No se pudo obtener la ubicación.');
      });
    } else {
      alert('El navegador no soporta la geolocalización.');
    }
  }
}
