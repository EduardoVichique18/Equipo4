import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup; // Declaramos el formulario reactivo

  constructor(private formBuilder: FormBuilder) {
    // Inicializamos el formulario con validaciones
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.email, this.domainValidator], // Validaciones con validador personalizado
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(6)], // Requerido, mínimo 6 caracteres
      ],
    });
  }

  // Método para manejar el inicio de sesión
  onLogin() {
    if (this.loginForm.valid) {
      console.log('Formulario válido', this.loginForm.value);
      // Aquí podrías añadir lógica para enviar datos al servidor
    } else {
      console.log('Formulario inválido');
    }
  }

  // Validador personalizado para verificar el dominio del correo
  private domainValidator(control: AbstractControl): ValidationErrors | null {
    const email: string = control.value || '';
    const domainRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|mx)$/;

    if (email && !domainRegex.test(email)) {
      return { invalidDomain: true }; // Error personalizado
    }
    return null; // El correo es válido
  }
}
