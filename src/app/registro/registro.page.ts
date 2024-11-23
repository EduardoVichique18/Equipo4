import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registroForm!: FormGroup;  // Inicializamos la propiedad con el operador '!' para indicar que se asignará más tarde
  passwordVisible: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registroForm = this.fb.group({
      lastName: ['', Validators.required],
      motherLastName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/.*\d.*/), Validators.pattern(/.*[\W_].*/)]],
      confirmPassword: ['', Validators.required]
    });
  }

  // Función para verificar si se puede avanzar al siguiente paso
  canProceed(): boolean {
    return this.registroForm.valid;
  }

  // Función para alternar la visibilidad de la contraseña
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  // Función para obtener los controles de los formularios y facilitar el manejo de errores
  get lastNameControl() {
    return this.registroForm.get('lastName');
  }

  get motherLastNameControl() {
    return this.registroForm.get('motherLastName');
  }

  get firstNameControl() {
    return this.registroForm.get('firstName');
  }

  get emailControl() {
    return this.registroForm.get('email');
  }

  get passwordControl() {
    return this.registroForm.get('password');
  }

  get confirmPasswordControl() {
    return this.registroForm.get('confirmPassword');
  }
}
