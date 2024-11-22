import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {
  tituloTarea: string = '';
  nombreMateria: string = '';
  fechaEntrega: string = '';

  constructor(
    private modalController: ModalController,
    private taskService: TaskService // Usa TaskService
  ) {}

  cerrarModal() {
    this.modalController.dismiss();
  }

  agregarTarea() {
    const nuevaTarea = {
      titulo: this.tituloTarea,
      materia: this.nombreMateria,
      fecha: this.fechaEntrega,
    };

    this.taskService.createTask(nuevaTarea).subscribe(
      (response) => {
        // Devuelve la tarea creada y cierra el modal
        this.modalController.dismiss(response);
      },
      (error) => {
        console.error('Error al agregar la tarea:', error);
      }
    );
  }
}
