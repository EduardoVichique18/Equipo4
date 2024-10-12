import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';  // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage {
  listaTareas: Array<{ titulo: string, materia: string, fecha: string }> = [];

  constructor(
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  async abrirModal() {
    const modal = await this.modalController.create({
      component: ModalPage, // Llamamos al modal
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        this.listaTareas.push(result.data);
      }
    });

    return await modal.present();
  }
}
