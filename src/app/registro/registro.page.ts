import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registroForm!: FormGroup;  // Usar "!" para indicar inicialización diferida
  passwordVisible: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // Inicializar el formulario en el ngOnInit
    this.registroForm = this.fb.group({
      lastName: ['', Validators.required],
      motherLastName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/.*\d.*/), Validators.pattern(/.*[\W_].*/)]],
      confirmPassword: ['', Validators.required]
    });
  }

  // Verificar si se puede proceder al siguiente paso
  canProceed(): boolean {
    return this.registroForm.valid;
  }

  // Alternar visibilidad de la contraseña
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  // Métodos para obtener los controles del formulario y validaciones
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
