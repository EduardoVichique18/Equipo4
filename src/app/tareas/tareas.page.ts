import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage {  // Make sure this is exported with export keyword
  tituloTarea: string = '';
  nombreMateria: string = '';
  fechaEntrega: string | null = null;

  constructor(private alertController: AlertController) {}

  seleccionarFecha() {
    const date = new Date().toISOString().split('T')[0];
    this.fechaEntrega = date;
  }

  async agregarTarea() {
    if (!this.tituloTarea || !this.nombreMateria || !this.fechaEntrega) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, complete todos los campos.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    console.log('Tarea agregada:', {
      titulo: this.tituloTarea,
      materia: this.nombreMateria,
      fecha: this.fechaEntrega,
    });

    const successAlert = await this.alertController.create({
      header: 'Éxito',
      message: 'Tarea agregada correctamente.',
      buttons: ['OK']
    });
    await successAlert.present();

    this.tituloTarea = '';
    this.nombreMateria = '';
    this.fechaEntrega = null;
  }
}