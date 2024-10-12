import { Component } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
})
export class ModalPage {
  tituloTarea: string = '';
  nombreMateria: string = '';
  fechaEntrega: string | null = null;

  constructor(
    private modalController: ModalController,
    private alertController: AlertController
  ) { }

  async agregarTarea() {
    if (!this.tituloTarea || !this.nombreMateria || !this.fechaEntrega) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, complete todos los campos.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    this.modalController.dismiss({
      titulo: this.tituloTarea,
      materia: this.nombreMateria,
      fecha: this.fechaEntrega,
    });
  }

  cerrarModal() {
    this.modalController.dismiss();
  }
}
