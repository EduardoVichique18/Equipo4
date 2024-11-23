import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importar FormBuilder y Validators
import { Router } from '@angular/router'; // Para navegación

@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.page.html',
  styleUrls: ['./info-personal.page.scss'],
})
export class InfoPersonalPage implements OnInit {
  personalForm!: FormGroup; // Declarar la propiedad del formulario reactivo
  maxDate: string = ''; // Inicializar con un valor predeterminado vacío

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    // Establecer la fecha máxima (14 años atrás desde la fecha actual)
    const today = new Date();
    today.setFullYear(today.getFullYear() - 18);
    this.maxDate = today.toISOString(); // Convertir la fecha a formato ISO 8601

    // Inicializar el formulario con las validaciones
    this.personalForm = this.fb.group({
      birthDate: ['', Validators.required], // Validación para fecha de nacimiento
      gender: ['', Validators.required], // Validación para género
      birthPlace: ['', Validators.required], // Validación para lugar de nacimiento
      highSchool: ['', Validators.required], // Validación para escuela
    });
  }

  // Método para verificar si el formulario es válido
  canProceed(): boolean {
    return this.personalForm.valid;
  }

  // Método que se ejecuta al presionar "Siguiente"
  nextTab() {
    if (this.canProceed()) {
      this.router.navigate(['/datos-generales']); // Navega si el formulario es válido
    } else {
      console.log('Formulario no válido, completa los campos.');
    }
  }
}
