import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultdata',
  templateUrl: './resultdata.page.html',
  styleUrls: ['./resultdata.page.scss'],
})
export class ResultdataPage {
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

  constructor() {}
}
