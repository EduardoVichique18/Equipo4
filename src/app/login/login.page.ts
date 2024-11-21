import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup; // Declaramos el formulario reactivo

  constructor(private formBuilder: FormBuilder) {
    // Inicializamos el formulario con validaciones
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.email], // Requerido y debe ser un correo válido
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(6)], // Requerido, mínimo 6 caracteres
      ],
    });
  }

  ngOnInit() {}

  // Método para manejar el inicio de sesión
  onLogin() {
    if (this.loginForm.valid) {
      console.log('Formulario válido', this.loginForm.value);
      // Aquí podrías añadir lógica para enviar datos al servidor
    } else {
      console.log('Formulario inválido');
    }
  }
}
