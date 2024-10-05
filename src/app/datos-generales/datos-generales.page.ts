import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.page.html',
  styleUrls: ['./datos-generales.page.scss'],
})
export class DatosGeneralesPage implements OnInit {
  /*constructor(private navCtrl: NavController) { }

  navigateToComponent() {
    this.navCtrl.navigateRoot('../info-personal'); // Reemplaza con la ruta correcta
  }*/





   formulario: FormGroup;

constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nacionalidad: ['', Validators.required],
      estadoCivil: ['', Validators.required],
      colonia: ['', Validators.required],
      municipio: ['', Validators.required],
      celular: ['', [Validators.required, Validators.maxLength(10)]],
      paisOrigen: ['', Validators.required],
      ocupacion: ['', Validators.required],
      codigoPostal: ['', [Validators.required, Validators.maxLength(5)]],
      localidad: ['', Validators.required],
      estadoOrigen: ['', Validators.required],
      direccion: ['', Validators.required],
      estado: ['', Validators.required],
      telefonoCasa: ['', Validators.required],
    });
  }

  ngOnInit() { }

  onSubmit() {
    if (this.formulario.valid) {
      // Aquí puedes manejar la lógica de envío del formulario
      console.log('Formulario válido:', this.formulario.value);
    } else {
      console.log('Formulario inválido');
      this.formulario.markAllAsTouched(); // Marca todos los campos como tocados para mostrar los errores
    }

  }

}
