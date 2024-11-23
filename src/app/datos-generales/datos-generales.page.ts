import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.page.html',
  styleUrls: ['./datos-generales.page.scss'],
})
export class DatosGeneralesPage implements OnInit {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      estadoCivil: ['', Validators.required],
      colonia: ['', Validators.required],
      codigoPostal: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      localidad: ['', Validators.required],
      direccion: ['', Validators.required],
      celular: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      ocupacion: ['', Validators.required],
    });
  }

  ngOnInit() { }

  onSubmit() {
    if (this.formulario.valid) {
      console.log('Formulario válido:', this.formulario.value);
    } else {
      console.log('Formulario inválido');
      this.formulario.markAllAsTouched(); // Marca todos los campos como tocados para mostrar los errores
    }
  }
}
