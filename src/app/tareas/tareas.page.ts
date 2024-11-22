import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { TaskService } from '..//task.service';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage implements OnInit {
  listaTareas: Array<any> = [];

  constructor(
    private alertController: AlertController,
    private modalController: ModalController,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.cargarTareas();
  }

  cargarTareas() {
    this.taskService.getTasks().subscribe((tasks: any) => {
      this.listaTareas = tasks;
    });
  }

  async abrirModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        this.taskService.createTask(result.data).subscribe(() => {
          this.cargarTareas();
        });
      }
    });

    return await modal.present();
  }
  async confirmarEliminar(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: '¿Estás seguro de que deseas eliminar esta tarea?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.eliminarTarea(id);
          },
        },
      ],
    });
  
    await alert.present();
  }

  eliminarTarea(id: number) {
    this.taskService.deleteTask(id).subscribe(
      () => {
        this.cargarTareas();
      },
      (error) => {
        console.error('Error al eliminar la tarea:', error);
      }
    );
  }
}
