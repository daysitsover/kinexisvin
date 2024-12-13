import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-resultlanjutan',
  templateUrl: './resultlanjutan.page.html',
  styleUrls: ['./resultlanjutan.page.scss'],
})
export class ResultlanjutanPage {
  scores = [
    { parameter: 'Posisi lutut', kanan: 1, kiri: 2 },
    { parameter: 'Kontak awal kaki', kanan: 2, kiri: 3 },
    { parameter: 'Kontak kaki saat berdiri', kanan: 1, kiri: 0 },
    { parameter: 'Waktu tumit terangkat', kanan: 2, kiri: 3 },
    { parameter: 'Posisi tumit saat berdiri', kanan: 1, kiri: 2 },
    { parameter: 'Lebar langkah', kanan: 3, kiri: 3 },
    { parameter: 'Perubahan dari waktu ke waktu', kanan: 0, kiri: 1 },
    { parameter: 'Alat bantu berdiri', kanan: 3, kiri: 3 },
  ];

  isModalOpen: boolean = false;

  constructor(private alertController: AlertController) {}

  async showDetailMessage() {
    const alert = await this.alertController.create({
      message:
        'Kondisi kaki kiri menunjukkan sedikit perbaikan, sementara kaki kanan stabil. Latihan peregangan, penguatan otot, dan keseimbangan sederhana bisa membantu meningkatkan posisi lutut dan konsistensi waktu pengangkatan tumit. Dengan memperhatikan beberapa hal ini, Anda dapat terus meningkatkan kenyamanan dan stabilitas berjalan. Tetap aktif dan jaga pola berjalan agar semakin optimal! 😊',
      buttons: ['OK'], // Tombol untuk menutup pop-up
    });

    await alert.present();
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
